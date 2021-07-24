const { validSectionName } = require("../helpers/validation");
const SectionService = require("./libs");

const sectionController = {
  getArticle: async (req, res) => {
    const { sectionName } = req.params;

    if (!validSectionName(sectionName)) {
      return res.status(400).json({
        message:
          "section name must contain small letters only sesparated by hyphen",
      });
    }

    try {
      const articles = await SectionService.getArticles(sectionName);

      return res.status(200).json({ articles });
    } catch (err) {
      return res.status(500).json({ message: "error while fetching articles" });
    }
  },
};

module.exports = sectionController;
