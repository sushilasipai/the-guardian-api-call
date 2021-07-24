const sinon = require("sinon");
const SectionService = require("../sections.service");

describe("section service", () => {
  it("should be defined", (done) => {
    expect(SectionService).toBeDefined();
    done();
  });

  describe("getArticle function test", () => {
    it("should check for articles on cache given the section name", async () => {
      const ArticleCacheServiceMock = {
        getArticlesFromCache: sinon.spy(),
        setArticlesToCache: sinon.spy(),
      };

      const ArticleRequestServiceMock = {
        getArticleFromAPI: sinon.spy(),
      };

      const sectionService = SectionService(
        ArticleCacheServiceMock,
        ArticleRequestServiceMock
      );

      await sectionService.getArticles("football");

      const expected = ArticleCacheServiceMock.getArticlesFromCache.calledOnce;

      expect(expected).toBeTruthy();
    });

    it("should get articles from remote api and set on cache if not found on cache ", async () => {
      const ArticleCacheServiceMock = {
        getArticlesFromCache: (sectionName) => {
          return Promise.resolve([]);
        },
        setArticlesToCache: sinon.spy(),
      };

      const ArticleRequestServiceMock = {
        getArticleFromAPI: sinon.spy(),
      };

      const sectionService = SectionService(
        ArticleCacheServiceMock,
        ArticleRequestServiceMock
      );

      await sectionService.getArticles("football");

      const expected = ArticleCacheServiceMock.setArticlesToCache.calledOnce;
      const expectedRequest =
        ArticleRequestServiceMock.getArticleFromAPI.calledOnce;

      expect(expected).toBeTruthy();
      expect(expectedRequest).toBeTruthy();
    });
  });
});
