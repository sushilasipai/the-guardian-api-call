const NodeCache = require("node-cache");
const envVars = require("../../configs/env.configs");

const articleCache = new NodeCache({ stdTTL: envVars.ttl || 600 });

const ArticleCacheService = {
  //gets articles from cache
  getArticlesFromCache: (sectionName) => {
    const articles = articleCache.get(sectionName);

    if (!articles) {
      return Promise.resolve([]);
    }

    return Promise.resolve(articles);
  },

  //saves articles to cache
  setArticlesToCache: (sectionName, articles) => {
    articleCache.set(sectionName, articles);

    return Promise.resolve(true);
  },
};

module.exports = ArticleCacheService;
