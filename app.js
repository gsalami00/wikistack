const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const Sequelize = require('sequelize');
const bodyparser = require('body-parser');
const html = require('html-template-tag');
const { db } = require('./models');

// const { Page } = require('./models');
// const { User } = require('./models');
const models = require('./models');

// const database = require('postgres://localhost/wikistack')

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));


app.get('/', (req, res) => {
  res.redirect('/wiki');
});

const run = async () => {
  await models.db.sync();
  // await db.User.sync();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App Listening at Port: ${PORT}`);
  });
}

run();

