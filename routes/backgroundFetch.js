const express = require("express");
const Parser = require("rss-parser");
const backgroundRouter = express.Router();
backgroundRouter.get("/", async (req, res) => {
  const parser = new Parser();
  const { Pool } = require("pg");
  try {
    const pool = new Pool();
    pool.connect();
    const feeds = await pool.query(
      "select id, url from feeds where url is not null"
    );

    console.log(`count=${feeds.rowCount}`);
    for (const row of feeds.rows) {
      //update all current feeds to 0 so that we can compare newly entered items against them
      console.log(`url=${row["url"]}`);

      const updateRes = await pool.query(
        "update items set isNew=false where feedID=$1",
        [row["id"]]
      );

      //get items and insert them

      console.log("good");

      const rssFeed = await parser.parseURL(row["url"]);
      for (const item of rssFeed.items) {
        const { title, link, content } = item;

        await pool.query(
          "insert into items (title,description,url,feedid) values ($1,$2,$3,$4)",
          [title, content, link, row["id"]]
        );
      } ///ending items foreach
      //delete old items here.
      console.log(`deleteedID=${row["id"]}`);
      await pool.query(
        "delete from items where url in (select url from items where feedid=$1 and isNew=false) and isNew=true",
        [row["id"]]
      );
    } //ending for loop for feeds
    pool.end();
    console.log("success");
    res.send(`{"success":"true"}`);
  } catch (e) {
    console.log(e.stack);
    res.send(e);
  }
});

module.exports = backgroundRouter;
