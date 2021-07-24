const express = require("express");
const sectionController = require("./sections.controller");

const sectionRouter = express.Router();

sectionRouter.get("/:sectionName", sectionController.getArticle);

module.exports = sectionRouter;
