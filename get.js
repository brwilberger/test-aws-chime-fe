const https = require('https');

function validateAccessTokenOrCredsAndReturnUser(identityToken) {
  const promise = new Promise((resolve, reject) => {
    https.get({ host: 'slingshotaerospace.us.auth0.com', path: '/userinfo', headers: { Authorization: identityToken  }  }, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;

      });

      resp.on('end', () => {
        const { sub, name  } = JSON.parse(data);
        resolve({
          uuid: sub,
          displayName: name,
          metadata: null

        });

      });


    }).on("error", (err) => {
      reject(new Error('Error fetching user data in Auth0'))

    });

  })

  return promise;
}

validateAccessTokenOrCredsAndReturnUser('Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im90N284SWJxVFE4c21Lb1NZSWJxdyJ9.eyJodHRwczovL3NzYS56b25lL2FwcF9tZXRhZGF0YSI6eyJhY2NlcHRlZF90ZXJtc19hbmRfY29uZGl0aW9ucyI6dHJ1ZX0sImlzcyI6Imh0dHBzOi8vc2xpbmdzaG90YWVyb3NwYWNlLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNjUxNjgzMDczMjg5MTI2NjU0MyIsImF1ZCI6WyJiZWFjb24tYXBpIiwiaHR0cHM6Ly9zbGluZ3Nob3RhZXJvc3BhY2UudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYyNjA5NTIzNywiZXhwIjoxNjI2MTgxNjM3LCJhenAiOiJsQllQUkpWZEZmZzB2b0xqUHZkajBWZ3FkeGVKZkxZaCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.rBP75NrNBLrJb-bOhFdYxL18OOeNgTAsbg6uYSZ7b9MBeM4858K8dwVBVzfKc67KXVkjQHNiLk5CEDbit_En7lWRDOvEvUowXIgDpDzgpcZTlCEOqbDwy5FIZ32KorS5NT2CDTOpXs1vjDbI16BgTPzOZjWoZt3-jh4IOG6IxqbLIfyKCmWlAytUAzlfyltZcLr_gwMR-TM2OFYdzULZ8AFd4e2IC0hDPi_YfAPQaVfu-BPgJUdJkdYmqPOol4PUnpi2Z_rFJcE2PYxiMq8KipIzYMPB_gomEpVclHoCy338erkRCSFxn11BUVIaoEIm1aooFg60McA78C2xx91a7w').then(console.log).catch(console.log)
