const { validSectionName } = require("../helpers/validation");

const sectionController = {
  getArticle: async (req, res) => {
    const { sectionName } = req.params;

    if (!validSectionName(sectionName)) {
      return res
        .status(400)
        .json({
          message:
            "section name must contain small letters only sesparated by hyphen",
        });
    }

    return res.status(200).json({ message: "message from getArticle" });
  },
};

module.exports = sectionController;
