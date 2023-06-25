const express = require("express");
const { handleError } = require("../../../utils/handleErrors");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const cards = {};
    return res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});
