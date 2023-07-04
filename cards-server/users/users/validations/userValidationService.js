const loginValidation = require("./joi/loginValidation");
const registerValidation = require("./joi/registerValidation");
const validator = "joi";

const validateUser = (user) => {
  if (validator == "joi") {
    const { error: loginError } = loginValidation(user);
    const { error: registerError } = registerValidation(user);

    if (loginError) return loginError.details[0].message;
    if (registerError) return registerError.details[0].message;
  }
  return false;
};

module.exports = validateUser;
