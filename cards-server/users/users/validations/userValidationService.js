const loginValidation = require("./joi/loginValidation");
const registerValidation = require("./joi/registerValidation");
const config = require("config");

const validator = undefined || config.get("VALIDATOR");

const validateRegistration = (user) => {
  if (validator === "Joi") {
    const { error } = registerValidation(user);
    if (error) return error.details[0].message;
    else return false;
  }
};

const validateLogin = (user) => {
  if (validator === "Joi") {
    const { error } = loginValidation(user);
    if (error) return error.details[0].message;
    else return false;
  }
};

exports.validateRegistration = validateRegistration;
exports.validateLogin = validateLogin;
