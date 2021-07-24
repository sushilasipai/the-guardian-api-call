const ArticleCacheService = require("./sections.cache");
const ArticleRequestService = require("./sections.request");
const ArticleService = require("./sections.service");

module.exports = ArticleService(ArticleCacheService, ArticleRequestService);
