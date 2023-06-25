const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const app = express();
const PORT = 8181;

app.listen(PORT, () => {
  console.log(chalk.yellow("the server is listening to port" + PORT));
});
