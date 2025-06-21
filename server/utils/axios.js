const axios = require('axios');
const https = require('https');
const fs = require('fs');

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
//      ca: fs.readFileSync('/ca/certs/searxng.crt'),
      rejectUnauthorized: false,
  }),
});

module.exports = axiosInstance;
