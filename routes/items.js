const express = require("express");
const router = express.Router();

router.get("/:feedID", async (req, res) => {
  const { Client } = require("pg");
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: false }
          : false,
    });
    client.connect();
    const dbRes = await client.query(
      "select feeds.name, feeds.isaudio, items.feedID, items.id,items.title, items.url,items.description from items inner join feeds on feeds.id=items.feedid where items.feedid=$1 order by dateAdded desc",
      [req.params["feedID"]]
    );

    res.send(dbRes.rows);

    await client.end();
  } catch (e) {
    console.log(e);
  }
});

router.get("/:feedID/:userID", async (req, res) => {
  const { Client } = require("pg");
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: false }
          : false,
    });
    client.connect();
    const dbRes = await client.query(
      "select items.feedID, items.id,items.title, items.url,items.description from items left outer join unreadItems on unreaditems.itemid=items.id and unreaditems.userid=$2 where items.feedid=$1 and (unreadItems.id is null or unreadItems.unread=true) order by dateAdded desc",
      [req.params["feedID"], req.params["userID"]]
    );
    const q = await client.query(
      `insert into unReadItems (itemID,userID) select items.id,$2 from items left outer join unreadItems on unreadITems.itemid=items.id and unreadItems.userid=$2 where feedid=$1 and unreadItems.id is null`,
      [req.params.feedID, req.params.userID]
    );
    res.send(dbRes.rows);

    await client.end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
