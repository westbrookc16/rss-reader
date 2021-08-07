const express = require("express");
const { Client } = require("pg");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    await client.connect();
    const { email, sub } = req.body;
    const q = await client.query(
      "update users set email=$1 where sub=$2 returning *",
      [email, sub]
    );
    if (q.rowCount == 0) {
      const insertRes = await client.query(
        "insert into users (sub,email) values ($1,$2) returning *",
        [sub, email]
      );
      res.json(insertRes.rows);
    } else {
      //res.send(q.rows);
    }

    res.json(q.rows);
    await client.end();
  } catch (e) {
    console.log(e.stack);
  }
});
module.exports = router;
