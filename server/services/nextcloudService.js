// server/services/nextcloudService.js
const axios = require('../utils/axios');
const parser = require('xml2js').parseStringPromise;

const baseenc = Buffer.from(`${process.env.NC_USERNAME}:${process.env.NC_PASSWORD}`).toString('base64');

const getCalendar = async () => {
  const url = `${process.env.NC_BASE_URL}/ocs/v2.php/apps/dav/api/v1/events/upcoming`;

  const response = await axios.get(url, {
    headers: {
      'Authorization': `Basic ${baseenc}`,
      'OCS-APIRequest': 'true'
    },
  });

  return response.data;
};

const getBookmarks = async () => {
  const url = `${process.env.NC_BASE_URL}/index.php/apps/bookmarks/public/rest/v2/bookmark`;

  const response = await axios.get(url, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `basic ${baseenc}`,
    },
  });

  return response.data;
};

module.exports = {
  getCalendar,
  getBookmarks,
};

