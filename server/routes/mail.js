const express = require('express');
const router = express.Router();
const imapService = require('../services/imapService');

router.get('/mail', async (req, res) => {
  try {
    const mail = await imapService.getMail();
    res.json(mail);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch mail' });
  }
});

module.exports = router;

