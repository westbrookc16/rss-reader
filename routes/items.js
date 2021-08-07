const express = require("express");
const router = express.Router();
router.get("/:feedID", async (req, res) => {
  const { Client } = require("pg");
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    client.connect();
    const dbRes = await client.query(
      "select id,title, url,description from items where feedID=$1 order by dateAdded desc",
      [req.params["feedID"]]
    );
    res.send(dbRes.rows);
    await client.end();
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
