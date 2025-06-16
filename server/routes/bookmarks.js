const express = require('express');
const router = express.Router();
const nextcloudService = require('../services/nextcloudService');

router.get('/', async (req, res) => {
  try {
    const bookmarks = await nextcloudService.getBookmarks();
    res.json(bookmarks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch bookmarks' });
  }
});

module.exports = router;
