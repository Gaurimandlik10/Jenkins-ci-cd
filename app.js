const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the Jenkins CI/CD demo!', version: process.env.APP_VERSION || 'dev' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;