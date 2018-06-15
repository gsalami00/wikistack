const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const Sequelize = require('sequelize');
const bodyparser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App Listening at Port: ${PORT}`);
});
