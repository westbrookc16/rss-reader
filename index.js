require("dotenv").config();
const express = require("express");
//next two lines are for scheduling podcasts and feeds
require("./scripts/updateItems");
require("./scripts/updatePodcastItems");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (!req.secure && req.headers["x-forwarded-proto"] !== "https") {
      res.redirect("https://" + req.headers.host + req.url);
    } else {
      next();
    }
  });
  const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  };
  app.use(allowCrossDomain);
  app.use(express.static("front/build"));
}

//routes
const feeds = require("./routes/feeds");
const users = require("./routes/users");
const rssRoute = require("./routes/rss");
const BackgroundFetch = require("./routes/backgroundFetch");
const items = require("./routes/items");
const podcasts = require("./routes/podcastSearch");
const { all } = require("./routes/feeds");
app.use(express.json());

app.use("/api/feeds", feeds);
app.use("/api/podcasts", podcasts);
app.use("/api/rss", rssRoute);
app.use("/api/backgroundFetch", BackgroundFetch);
app.use("/api/items", items);
app.use("/api/users", users);
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
