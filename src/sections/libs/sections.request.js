const axios = require("axios");
const envVars = require("../../configs/env.configs");

const ArticleRequestService = {
  //gets articles for section name through API call
  getArticleFromAPI: async (
    sectionName,
    page = 1,
    pageSize = 20,
    orderBy = "newest"
  ) => {
    try {
      const response = await axios.get(
        `${envVars.api_url}/search?section=${sectionName}&order-by=${orderBy}&page=${page}&page-size=${pageSize}&api-key=${envVars.api_key}`
      );
      return response.data.response.results;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ArticleRequestService;
