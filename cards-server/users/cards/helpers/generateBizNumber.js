const _ = require("lodash");
const { createError } = require("../../../utils/handleErrors");
const Card = require("../models/mongodb/card");
const generateBizNumber = async () => {
  try {
    const random = _.random(1_000_000, 9_999_999);
    const card = await Card.findOne({ BusinessNumber: random });
    if (card) generateBizNumber();
    return random;
  } catch (error) {
    createError("generate biz number", error);
  }
};
module.exports = generateBizNumber;
