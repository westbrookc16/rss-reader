const express = require("express");
const router = express.Router();
router.get("/:feedID", async (req, res) => {
  const { Pool } = require("pg");
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    pool.connect();
    const dbRes = await pool.query(
      "select id,title, url,description from items where feedID=$1 order by dateAdded desc",
      [req.params["feedID"]]
    );
    res.send(dbRes.rows);
    await pool.end();
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
