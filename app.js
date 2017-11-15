const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const useragent = require("express-useragent");
const app = (module.exports = express());
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());
const api = "/api/whoami";

app.get("/", function(req, res, next) {
  res.send("Welcome to Jonathan's Header Parser API!");
});

app.get(api, function(req, res, next) {
  let language = req.acceptsLanguages();
  let software = req.useragent.os;
  let browser = req.useragent.browser;
  let ipAddress = req.ip;

  res.json({
    "ip address": ipAddress,
    language: language[0],
    software: software,
    browser: browser
  });
});

app.listen(3000, function() {
  console.log("Working");
});
