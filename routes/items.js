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
      "select items.feedID, items.id,items.title, items.url,items.description from items left outer join unreadItems on unreaditems.itemid=items.id where items.feedid=$1 and (unreadItems.id is null or unreadItems.unread=true) order by dateAdded desc",
      [req.params["feedID"]]
    );
    const q = await client.query(
      `insert into unReadItems (itemID) select items.id from items left outer join unreadItems on unreadITems.itemid=items.id where feedid=$1 and unreadItems.id is null`,
      [req.params.feedID]
    );
    res.send(dbRes.rows);

    await client.end();
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
