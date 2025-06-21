// server/services/nextcloudService.js
const axios = require('../utils/axios');

const getNote = async () => {
  const url = `${process.env.JP_BASE_URL}/notes/${process.env.JP_NOTE_ID}?token=${process.env.JP_TOKEN}&fields=body,title`;

  const response = await axios.get(url);
  return response.data;
};

module.exports = {
  getNote,
};

