const express = require("express");
const axios = require("axios");
const router = express.Router();
router.get("/search", async (req, res) => {
  const search = req.query.q;
  const data = await axios.get(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      search
    )}&media=podcast`
  );
  res.send(data.data);
  console.log(search);
});
module.exports = router;
