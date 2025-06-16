// server/services/nextcloudService.js
const axios = require('axios');
const parser = require('xml2js').parseStringPromise;

const getTasks = async () => {
  const url = `${process.env.HB_BASE_URL}/user`;

  const response = await axios.get(url, {
    headers: {
      'x-api-user': `${process.env.HB_UID}`,
      'x-api-key': `${process.env.HB_API_TOKEN}`,
      'x-client': `${process.env.HB_UID} foxhole`,
    },
  });
  return response.data;
};

module.exports = {
  getTasks,
};

