// Lambda that validates user tokens and returns AWS Creds for access to chime, scoped to that user
const AWS = require('aws-sdk');
const uuidv4 = require('uuid');
const https = require('https');

AWS.config.update({ region: process.env.AWS_REGION });

const chime = new AWS.Chime({ region: process.env.AWS_REGION });
const sts = new AWS.STS({ region: process.env.AWS_REGION });

const APP_INSTANCE_ID = process.env.ChimeAppInstanceArn;
const USER_ROLE_ARN = process.env.UserRoleArn;
const ANON_USER_ROLE_ARN = process.env.AnonUserRole;

// STEP 1: Validate your identity providers access token and return user information
// including UUID, and optionally username or additional metadata
function validateAccessTokenOrCredsAndReturnUser(identityToken) {
  const promise = new Promise((resolve, reject) => {
    https.get({ host: 'slingshotaerospace.us.auth0.com', path: '/userinfo', headers: { Authorization: identityToken } }, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        const { sub, name } = JSON.parse(data);
        resolve({
          uuid: sub.replace('|', '-'), // cognito rejects pipes in uuids.
          displayName: name,
          metadata: null
        });
      });

    }).on("error", (err) => {
      reject(new Error('Error fetching user data in Auth0'));
    });
  });

  return promise;
}

// STEP 2: get AWS Creds by calling assumeRole with the user info returned
// in step one.
async function assumeRole(user) {
  const assumedRoleResponse = await sts.assumeRole({
    RoleArn: USER_ROLE_ARN,
    RoleSessionName: `chime_${user.uuid}`,
    DurationSeconds: '3600', // 1 hour, often want to set this to the duration of access token from IdP
    Tags: [{
      Key: 'UserUUID', // parameterizes IAM Role with users UUID
      Value: user.uuid
    }]
  }).promise();
  return assumedRoleResponse.Credentials;  // returns AWS Creds
}

// STEP 3: Create or get user in Chime (create is NOOP if already exists)
async function createOrGetChimeUserArn(user) {
  const createUserResponse = await chime
    .createAppInstanceUser({
      AppInstanceArn: APP_INSTANCE_ID,
      AppInstanceUserId: user.uuid,
      ClientRequestToken: uuidv4(),
      Name: user.displayName
    })
    .promise();

  return createUserResponse.AppInstanceUserArn;
}

// MAIN, call above in order
exports.handler = async event => {
  const method = event.httpMethod;
  const { path } = event;
  const authToken = event.headers.Authorization;

  let creds = null;
  let user = null

  try {
    user = await validateAccessTokenOrCredsAndReturnUser(authToken);
  } catch (err) {
    return {
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: 'Not Authorized'
    };
  }

  try {
    if (user !== null) {
      creds = await assumeRole(user);
      const userArn = await createOrGetChimeUserArn(user);
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Headers': '*',
					'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify({
          AppInstanceArn: APP_INSTANCE_ID,
          ChimeAppInstanceUserArn: userArn,
          ChimeUserId: user.uuid,
          ChimeCredentials: creds,
          ChimeDisplayName: user.displayName
        })
      };
    }
  } catch (err) {
    return {
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: 'Not Authorized'
    };
  }

  // Default response to not authorized
  return {
    statusCode: 401,
    headers: {
      'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: 'Not Authorized'
  };
};
