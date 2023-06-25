const express = require("express");
const chalk = require("chalk");
const cors = require("./middelwares/cors");
const app = express();
const PORT = 8181;

app.use(cors);

app.listen(PORT, () => {
  console.log(chalk.yellow("the server is listening to port" + PORT));
});
