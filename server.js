const app = require('./app');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is Running On Port ${port}`);
});

module.exports = server;
