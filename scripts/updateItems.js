const cron = require("node-cron");
const Parser = require("rss-parser");
const { Client } = require("pg");

module.exports = cron.schedule("*/30 * * * *", async () => {
  const parser = new Parser();
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
      "select id, url from feeds where url is not null and isaudio=false"
    );

    for (const row of feeds.rows) {
      //get items and update or insert them

      const rssFeed = await parser.parseURL(row["url"]);
      for (let i = rssFeed.items.length - 1; i >= 0; i--) {
        const item = rssFeed.items[i];
        const { title, link, content } = item;
        const updateRows = await client.query(
          `update items set title=$1, description=$2 where url=$3 and feedID=$4`,
          [title, content, link, row["id"]]
        );
        if (updateRows.rowCount === 0) {
          await client.query(
            "insert into items (title,description,url,feedid) values ($1,$2,$3,$4)",
            [title, content, link, row["id"]]
          );
        }
      } ///ending items foreach
    } //ending for loop for feeds

    console.log("success");
    await client.end();
  } catch (e) {
    console.log("an error occurred==>>", e.stack);
  }
});
