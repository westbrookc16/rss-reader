const express = require("express");
const Parser = require("rss-parser");
const rssRoute = express.Router();
rssRoute.post("/info", async (req, res) => {
  const { url } = req.body;
  const parser = new Parser();
  try {
    const rssRes = await parser.parseURL(url);
    const { description, title } = rssRes;
    const returnObj = { description, title, url };
    res.send(returnObj);
  } catch (e) {
    res.send("invalid url");
    console.log(e);
  }
});
module.exports = rssRoute;
