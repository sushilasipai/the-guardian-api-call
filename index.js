const app = require("./src/configs/app.configs");
const envVar = require("./src/configs/env.configs");

app.listen(envVar.port || 3000, () => {
  console.log("App is listening to port", envVar.port || 3000);
});
