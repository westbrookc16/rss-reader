const express = require("express");
const { Client } = require("podcast-api");
const router = express.Router();
router.get("/search", async (req, res) => {
  const client = Client({
    apiKey: process.env.LISTEN_API_KEY || null,
  });
  try {
    console.log(req.query.offset);
    const response = await client.search({
      q: decodeURIComponent(req.query.q),
      offset: req.query.offset,
      type: "podcast",
    });
    res.json(response.data);
  } catch (e) {
    console.log(e.stack);
    res.send(e);
  }
});
module.exports = router;
