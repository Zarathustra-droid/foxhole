const express = require('express');
const router = express.Router();
const habiticaService = require('../services/habiticaService');

router.get('/', async (req, res) => {
  try {
    const tasks = await habiticaService.getTasks();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch tasks' });
  }
});

module.exports = router;

