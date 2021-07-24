const getArticles = (sectionCache, sectionRequest) => async (sectionName) => {
  let articles = await sectionCache.getArticlesFromCache(sectionName);

  if (articles && articles.length > 0) {
    return articles;
  }

  try {
    let remoteArticles = await sectionRequest.getArticleFromAPI(sectionName);

    await sectionCache.setArticlesToCache(sectionName, remoteArticles);
    return remoteArticles;
  } catch (error) {
    throw error;
  }
};

module.exports = (sectionCache, sectionRequest) => {
  return {
    getArticles: getArticles(sectionCache, sectionRequest),
  };
};
