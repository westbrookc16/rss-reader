const { Client } = require("pg");

const express = require("express");
const RssParser = require("rss-parser");
const PodcastParser = require("podcast-feed-parser");

const router = express.Router();
router.post("/:userID", async (req, res) => {
  const feed = req.body;
  const { userID } = req.params;
  //get info from feed
  const rssParser = new RssParser();
  try {
    if (feed.isAudio === false) {
      const rssRes = await parser.parseURL(feed.url);
      feed.name = rssRes.title;
      feed.description = rssRes.description;
    } else {
      //get podcast feed
      const podcastRes = await PodcastParser.getPodcastFromURL(feed.url);

      feed.description = podcastRes.meta.description;
      feed.name = podcastRes.meta.title;
    }
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: false }
          : false,
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
        "insert into feeds (name,url,description,isAudio) values ($1,$2,$3,$4) returning *";
      const { name, url, description, isAudio } = feed;
      const values = [name, url, description, feed.isAudio];
      const insertRes = await client.query(queryText, values);
      feedID = insertRes.rows[0].id;
    } else {
      feedID = selectQuery.rows[0].id;
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
    //see if there are any items, if not fill the items table
    const itemsSelect = await client.query(
      "select id from items where feedid=$1",
      [feedID]
    );
    if (itemsSelect.rowCount === 0) {
      if (feed.isAudio === false) {
        for (let i = rssRes.items.length - 1; i >= 0; i--) {
          const item = rssRes.items[i];
          const { title, link, content } = item;

          await client.query(
            "insert into items (title,description,url,feedid) values ($1,$2,$3,$4)",
            [title, content, link, feedID]
          );
        }
      } else {
        //here is a podcast
        const podcastRes = await PodcastParser.getPodcastFromURL(feed.url);
        for (var i = 19; i >= 0; i--) {
          var item = podcastRes.episodes[i];
          await client.query(
            "insert into items (title,description,url,feedid) values ($1,$2,$3,$4)",
            [item.title, item.description, item.enclosure.url, feedID]
          );
        }
      }
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
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });
  try {
    await client.connect();
    const { userID } = req.params;
    const dbRes = await client.query(
      "select f.isAudio, f.id,name from feeds f inner join subscriptions s on s.feedID=f.id and s.userID=$1 inner join (select feedid, max(dateadded) as newestEntered from items group by feedid) as newdates on newdates.feedid=f.id where active=true order by newestEntered desc",
      [userID]
    );
    res.json(dbRes.rows);
    await client.end();
  } catch (e) {
    console.log(e.stack);
  }
});
module.exports = router;
