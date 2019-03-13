const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const util = require('util');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use(bodyParser.raw())

app.use((req, res, next) => {
  var env = process.env;

  res.write(util.inspect({
    req,
    env,
  }));
 res.end();
});

app.listen(process.env.PORT || 100, () => { console.log(`Listening on port ${process.env.PORT || 100}`) });
