const express = require('express');
const app = express();
const name = " PKSCODE"
app.get('/', (req, res) => {
  res.send('Hello World!Helllo');
});

module.exports = {app, name }; // 👈 export ONLY the app
