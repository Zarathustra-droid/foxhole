const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

router.get('/', async (req, res) => {
  try {
    const weather = await weatherService.getWeather();
    res.json(weather);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch weather' });
  }
});

module.exports = router;

