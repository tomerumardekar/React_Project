const morganLogger = require("./loggers/morganLogger");

const LOGGER = "morgan";
let usedLogger;
if (LOGGER === "morgan") {
  usedLogger = morganLogger;
}

module.exports = usedLogger;
