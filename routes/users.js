const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const pool = new Pool();
    await pool.connect();
    const { email, sub } = req.body;
    const q = await pool.query(
      "update users set email=$1 where sub=$2 returning *",
      [email, sub]
    );
    if (q.rowCount == 0) {
      const insertRes = await pool.query(
        "insert into users (sub,email) values ($1,$2) returning *",
        [sub, email]
      );
      res.json(insertRes.rows);
    } else {
      res.send(q.rows);
    }

    pool.end();
    res.json(q.rows);
  } catch (e) {
    console.log(e.stack);
  }
});
module.exports = router;
