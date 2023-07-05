const express = require("express");
const chalk = require("chalk");
const cors = require("./middelwares/cors");
const logger = require("./logger/loggerService");
const router = require("../cards-server/users/router/router");
const connectToDb = require("./users/DB/dbService");
const app = express();
const PORT = 8181;

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
  handleError(res, 500, "Internal error " + err.message);
});

app.listen(PORT, () => {
  console.log(chalk.yellow("The server is listening to port " + PORT));
  connectToDb();
});
