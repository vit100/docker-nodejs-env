const express = require('express');
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
const util = require('util');

require('dotenv').config();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use(bodyParser.raw());
app.use(bodyParser.xml());

app.use((req, res, next) => {
  res.send(
    util.inspect({
      req,
      env: process.env
    })
  );
});

app.listen(process.env.PORT || 100, () => {
  console.log(`Listening on port ${process.env.PORT || 100}`);
});
