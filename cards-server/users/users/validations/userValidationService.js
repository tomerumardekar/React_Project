const loginValidation = require("./joi/loginValidation");
const registerValidation = require("./joi/registerValidation");
const config = require("config");

const validator = undefined || config.get("VALIDATOR");

const validateRegistration = (user) => {
  if (validator === "Joi") return registerValidation(user);
};

const validateLogin = (user) => {
  if (validator === "Joi") return loginValidation(user);
};

exports.validateRegistration = validateRegistration;
exports.validateLogin = validateLogin;
