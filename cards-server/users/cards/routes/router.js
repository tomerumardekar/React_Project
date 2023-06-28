const express = require("express");
const cardRestController = require("../../cards/routes/cardsRestController");
const { handleError } = require("../../../utils/handleErrors");
const router = express.Router();
router.use("/cards", cardRestController);
router.use((req, res) => {
  handleError(res, 400, "path not found");
});
module.exports = router;
