// server/services/nextcloudService.js
const axios = require('../utils/axios');

const OW_BASE_URL = 'https://api.open-meteo.com/v1/forecast?latitude=43.5789&longitude=-79.6583&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,apparent_temperature_max,apparent_temperature_min,rain_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max&current=temperature_2m,cloud_cover,precipitation,relative_humidity_2m&timezone=America%2FNew_York&forecast_days=1';

const getWeather = async () => {

  const response = await axios.get(process.env.OW_BASE_URL);

  //const data = await parser(response.data);
  // Parse the iCal data or XML depending on your Nextcloud calendar config
  return response.data;
};

module.exports = {
  getWeather,
};

