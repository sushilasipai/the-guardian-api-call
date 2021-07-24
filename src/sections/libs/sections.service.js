const getArticles = (sectionCache, sectionRequest) => async (sectionName) => {
  //gets articles for given section name from cache
  let articles = await sectionCache.getArticlesFromCache(sectionName);

  if (articles && articles.length > 0) {
    return articles;
  }

  try {
    //gets articles through API called if not found in cache
    let remoteArticles = await sectionRequest.getArticleFromAPI(sectionName);

    //sets articles in the cache
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
