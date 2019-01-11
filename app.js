const express = require('express');
require('dotenv').config();
const util = require('util');


var app = express();

app.get("/", (req, res, next) => {
  var env = process.env;
 
  res.write(util.inspect({
    env,
    req
  },));
});

app.listen(process.env.PORT || 100, () => { console.log(`Listening on port ${process.env.PORT || 100}`) });
