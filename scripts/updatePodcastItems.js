const cron = require("node-cron");
const podcastParser = require("podcast-feed-parser");
const { Client } = require("pg");

module.exports = cron.schedule("*/30 * * * *", async () => {
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: false }
          : false,
    });
    await client.connect();
    const feeds = await client.query(
      "select id, url from feeds where url is not null and isaudio=true"
    );

    for (const row of feeds.rows) {
      //get items and update or insert them

      const rssFeed = await podcastParser.getPodcastFromURL(row.url);
      for (var i = 19; i >= 0; i--) {
        const item = rssFeed.episodes[i];
        const { title, description } = item;
        const link = item.enclosure.url;
        const updateRows = await client.query(
          `update items set title=$1, description=$2 where url=$3 and feedID=$4`,
          [title, description, link, row["id"]]
        );
        if (updateRows.rowCount === 0) {
          await client.query(
            "insert into items (title,description,url,feedid) values ($1,$2,$3,$4)",
            [title, description, link, row["id"]]
          );
        }
      } ///ending items foreach
    } //ending for loop for feeds

    console.log("podcast success");
    await client.end();
  } catch (e) {
    console.log("an error occurred==>>", e.stack);
  }
});
