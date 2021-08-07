const express = require("express");
const router = express.Router();
router.get("/:userID", async (req, res) => {
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
      "select items.feedID, items.id,items.title, items.url,items.description from items inner join feeds on feeds.id=items.feedid inner join subscriptions on subscriptions.feedID=feeds.id where subscriptions.userid=$1 order by items.feedID, dateAdded desc",
      [req.params["userID"]]
    );
    res.send(dbRes.rows);
    await client.end();
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
