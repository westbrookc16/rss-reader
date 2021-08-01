const express = require("express");
const router = express.Router();
router.post("/", async (req, res) => {
  const feed = req.body;
  const { Pool } = require("pg");
  const pool = new Pool();
  try {
    await pool.connect();
    const queryText =
      "insert into feeds (name,url,description) values ($1,$2,$3) returning *";
    const { name, url, description } = req.body;
    const values = [name, url, description];
    await pool.query(queryText, values, (err, qRes) => {
      if (err) {
        console.log(err.stack);
        res.send(err.stack);
        console.log(`body=${req.body}`);
      } else {
        console.log(qRes.rows[0]);
        res.send(qRes.rows[0]);
      }
      //}
    });
    await pool.end();
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});
module.exports = router;
