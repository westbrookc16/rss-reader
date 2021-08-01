const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//routes
const feeds = require("./routes/feeds");
const rssRoute = require("./routes/rss");

app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
  });
} else {
  require("dotenv").config();
}
app.use("/api/feeds", feeds);
app.use("/api/rss", rssRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
