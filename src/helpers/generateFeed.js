const dayjs = require("dayjs");

const generateFeed = (articles, sectionName) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
    <channel>
        <title>Guardian Article Rss feed</title>
        <link>https://www.theguardian.com</link>
        <description>The Guardian article feed by section name</description>
        <category>${sectionName}</category>
        ${generateRssItems(articles)}
    </channel>
    </rss>`;
};

const generateRssItems = (articles) => {
  return articles.reduce((items, article) => {
    return (items =
      items +
      `
        <item>
            <title>${article.webTitle || ""}</title>
            <link>${article.webUrl || ""}</link>
            <category>${article.sectionName || ""}</category>
            <guid>${article.webUrl || ""}</guid>
            <pubDate>${
              dayjs(article.webPublicationDate).format(
                "ddd, D MMM YYYY hh:mm:ss"
              ) + " GMT" || ""
            }</pubDate>
        </item>`);
  }, "");
};

module.exports = {
  generateFeed,
  generateRssItems,
};
