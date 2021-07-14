// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const appConfig = {
  credentialExchangeServiceApiGatewayInvokeUrl:'https://bf0nct3g3e.execute-api.us-east-1.amazonaws.com/Stage/creds',
  cognitoUserPoolId: 'us-east-1_bpWsDecVv',
  cognitoAppClientId: '3nfg1hcra51jt3c6l5i7nrbk00',
  cognitoIdentityPoolId: 'us-east-1:46fc7819-f1cd-43c1-91be-6db3f608a8a2',
  appInstanceArn: 'arn:aws:chime:us-east-1:654304387902:app-instance/988b48d7-4652-4a01-90b8-5a30e2697aaf',
  region: 'us-east-1',  // Only supported region for Amazon Chime SDK Messaging as of this writing
  attachments_s3_bucket_name: 'bernardo-test-chatattachmentsbucket-9mxoa9cya3d9'
};
export default appConfig;
