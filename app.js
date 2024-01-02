const express = require("express");
const bodyParser = require("body-parser");
require("body-parser-xml")(bodyParser);
const util = require("util");

require("dotenv").config();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use(bodyParser.raw());

app.use((req, res, next) => {
  res.json({
    req: {
      baseUrl: req.baseUrl,
      headers:req.headers,
      body: req.body,
      cookies: req.cookies,
      fresh: req.fresh,
      hostname: req.hostname,
      ip: req.ip,
      ips: req.ips,
      method: req.method,
      originalUrl: req.originalUrl,
      path: req.path,
      protocol: req.protocol,
      route: req.route,
      secure: req.secure,
      signedCookies: req.signedCookies,
      stale: req.stale,
      subdomains: req.subdomains,
      xhr: req.xhr,
    },
    processEnv: process.env,
  });
});

app.listen(process.env.PORT || 100, () => {
  console.log(`Listening on port ${process.env.PORT || 100}`);
});
