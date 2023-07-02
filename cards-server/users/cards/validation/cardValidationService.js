const validateCardWithJoi = require("./joi/validateCardWithJoi");

const validator = "joi";
const validateCard = (card) => {
  if (validator == "joi") {
    const { error } = validateCardWithJoi(card);
    if (error) return error.details[0].message;
  }
  return false;
};
module.exports = validateCard;
