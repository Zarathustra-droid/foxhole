const express = require('express');
const router = express.Router();
const joplinService = require('../services/joplinService');

router.get('/', async (req, res) => {
  try {
    const note = await joplinService.getNote();
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch note' });
  }
});

module.exports = router;

