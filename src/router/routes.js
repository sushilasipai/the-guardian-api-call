const express = require("express");
const sectionRouter = require("../sections/sections.routes");

const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({ message: "Server is up" });
});

router.use("/section", sectionRouter);

module.exports = router;
