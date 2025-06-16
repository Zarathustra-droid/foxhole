const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '..', 'websites.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'Failed to read websites' });
      const siteData = JSON.parse(data);
      res.json(siteData);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch key sites' });
  }
});

module.exports = router;

