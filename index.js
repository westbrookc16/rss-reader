require("dotenv").config();
const express = require("express");
require("./scripts/updateItems");

const app = express();
//routes
const feeds = require("./routes/feeds");
const users = require("./routes/users");
const rssRoute = require("./routes/rss");
const BackgroundFetch = require("./routes/backgroundFetch");
const items = require("./routes/items");
app.use(express.json());

app.use("/api/feeds", feeds);
app.use("/api/rss", rssRoute);
app.use("/api/backgroundFetch", BackgroundFetch);
app.use("/api/items", items);
app.use("/api/users", users);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    if (req.protocol === "http")
      res.redirect("https://" + req.headers.host + req.url);
    else res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
