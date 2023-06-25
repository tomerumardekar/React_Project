const express = require("express");
const chalk = require("chalk");
const cors = require("./middelwares/cors");
const logger = require("./logger/loggerService");
const app = express();
const PORT = 8181;

app.use(cors);
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(chalk.yellow("The server is listening to port " + PORT));
});
