const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookmarks', require('./routes/bookmarks'));
app.use('/api/calendar', require('./routes/calendar'));
app.use('/api/joplin', require('./routes/joplin'));
app.use('/api/mail', require('./routes/mail'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/weather', require('./routes/weather'));
app.use('/api/sites', require('./routes/keySites'));

app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all to serve React's index.html for unmatched routes
app.get('/', (req, res) => {
    console.warn(`Unhandled route: ${req.originalUrl}`);
    const indexPath = path.join(__dirname, '../client/build/index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('index.html not found');
    } 
});

module.exports = app;

