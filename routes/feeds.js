const { Client } = require("pg");
const express = require("express");
const Parser = require("rss-parser");
const router = express.Router();
router.post("/:userID", async (req, res) => {
  const feed = req.body;
  const { userID } = req.params;
  //get info from feed
  const parser = new Parser();
  try {
    const rssRes = await parser.parseURL(feed.url);
    feed["name"] = rssRes.title;
    feed["description"] = rssRes.description;

    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });

    await client.connect();
    //see if feed exists
    const selectQuery = await client.query(
      "select id from feeds where url=$1",
      [feed.url]
    );
    let feedID = 0;
    if (selectQuery.rowCount == 0) {
      //insert feed
      const queryText =
        "insert into feeds (name,url,description) values ($1,$2,$3) returning *";
      const { name, url, description } = feed;
      const values = [name, url, description];
      const insertRes = await client.query(queryText, values);
      feedID = insertRes.rows[0].id;
    } else {
      feedID = selectQuery.rows[0]["id"];
    }
    //select from subscriptions to make sure there are no duplicates
    const selectSubscription = await client.query(
      "select * from subscriptions where feedID=$1 and userID=$2",
      [feedID, userID]
    );
    if (selectSubscription.rowCount == 0) {
      const insertSubscription = await client.query(
        "insert into subscriptions (feedID, userID) values ($1,$2)",
        [feedID, userID]
      );
    }
    res.json({ feed });
    await client.end();
  } catch (e) {
    console.log(e.stack);
    res.send(e);
  }
});
router.get("/:userID", async (req, res) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  try {
    await client.connect();
    const { userID } = req.params;
    const dbRes = await client.query(
      "select f.id,name from feeds f inner join subscriptions s on s.feedID=f.id and s.userID=$1 where active=true order by name asc",
      [userID]
    );
    res.send(dbRes.rows);
    await client.end();
  } catch (e) {
    console.log("feeds error.");
    //console.log(e);
  }
});
module.exports = router;
