const express = require("express");
const Parser = require("rss-parser");
const router = express.Router();
router.post("/", async (req, res) => {
  const feed = req.body;
  //get info from feed
  const parser = new Parser();
  try {
    const rssRes = await parser.parseURL(feed.url);
    feed["name"] = rssRes.title;
    feed["description"] = rssRes.description;
    const { Pool } = require("pg");
    const pool = new Pool();

    await pool.connect();
    const queryText =
      "insert into feeds (name,url,description) values ($1,$2,$3) returning *";
    const { name, url, description } = feed;
    const values = [name, url, description];
    await pool.query(queryText, values, (err, qRes) => {
      if (err) {
        console.log(err.stack);
        res.send(err.stack);
      } else {
        console.log(qRes.rows[0]);
        res.send(qRes.rows[0]);
      }
      //}
    });
    await pool.end();
  } catch (e) {
    console.log(e.stack);
    res.send(e);
  }
});
router.get("/", async (req, res) => {
  const { Pool } = require("pg");
  const pool = new Pool();
  try {
    await pool.connect();
    const dbRes = await pool.query(
      "select id,name from feeds where active=true order by name asc"
    );
    res.send(dbRes.rows);
    await pool.end();
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
