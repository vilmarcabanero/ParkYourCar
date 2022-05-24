const https = require('https');

const API = {
  SERVER: {
    WEBSERVICES: {
      TYPE: 'HTTP',
      OPTIONS: {
        baseURL: 'http://localhost:4000/api',
        headers: {
          // 'Cache-Control': 'no-cache',
        },
        timeout: 50000,
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      },
    },
  },
};

module.exports = {
  API,
};
