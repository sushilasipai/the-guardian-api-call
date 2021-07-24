const express = require("express");
const routes = require("../router/routes");

const app = express();

app.use("/api", routes);

module.exports = app;
