const jwt = require("jsonwebtoken");
const key = "SECRET";

const generateAuthToken = (user) => {
  const {
    _id,
    isBusiness,
    isAdmin,
    name: { first },
  } = user;
  const payloadData = { _id, isAdmin, isBusiness, first, id: _id };
  const token = jwt.sign(payloadData, key);
  return token;
};

const verifyToken = (tokenFromClient) => {
  try {
    const userData = jwt.verify(tokenFromClient, key);
    return userData;
  } catch (error) {
    return null;
  }
};

exports.generateAuthToken = generateAuthToken;
exports.verifyToken = verifyToken;
