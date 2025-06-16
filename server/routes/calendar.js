const express = require('express');
const router = express.Router();
const nextcloudService = require('../services/nextcloudService');

router.get('/', async (req, res) => {
  try {
    const calendar = await nextcloudService.getCalendar();
    res.json(calendar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch calendar' });
  }
});

module.exports = router;

