const chalk = require("chalk");

const handleError = (res, status, message) => {
  console.log(
    chalk.yellowBright(
      `There was an error with status ${status} and the error is ${message}`
    )
  );
  res.status(status).send(message);
};

module.exports = handleError;

const createError = (validator, error) => {};
