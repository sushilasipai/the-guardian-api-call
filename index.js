const app = require("./src/configs/app.configs");
const envVar = require("./src/configs/env.configs");
const logger = require("./src/helpers/logger");

app.listen(envVar.port, () => {
  logger.info("App is listening to port " + envVar.port);
});
