const express = require("express");
const Parser = require("rss-parser");
const backgroundRouter = express.Router();
backgroundRouter.get("/", async (req, res) => {
  const parser = new Parser();
  const { Pool } = require("pg");
  try {
    const pool = new Pool();
    await pool.connect();
    const feeds = await pool.query(
      "select id, url from feeds where url is not null"
    );
    console.log(`count=${feeds.rowCount}`);
    feeds.rows.forEach(async (row) => {
      //update all current feeds to 0 so that we can compare newly entered items against them
      console.log(`url=${row["url"]}`);
      await pool.query("update items set isNew=false where feedID=$1", [
        row["id"],
      ]);
      //get items and insert them
      const rssFeed = await parser.parseURL(row["url"]);
      rssFeed.items.forEach(async (item) => {
        const { title, link, content } = item;

        await pool.query(
          "insert into items (title,description,url,feedid) values ($1,$2,$3,$4)",
          [title, content, link, row["id"]]
        );
      }); //ending items foreach
      //delete old items here.
      console.log(`deleteedID=${row["id"]}`);
      pool.query(
        "delete from items where url in (select url from items where feedid=$1 and isNew=false) and isNew=true",
        [row["id"]]
      );
    });
    await pool.end();
    res.send('{"msg":"Feed entered successfully."}');
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

module.exports = backgroundRouter;
