const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World! Codetest');
});

module.exports = app; // 👈 export ONLY the app
