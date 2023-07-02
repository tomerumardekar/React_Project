const express = require("express");
const userRestController = require("../routes/usersRestController");
const { handleError } = require("../../../utils/handleErrors");
const router = express.Router();
router.use("/users", userRestController);
router.use((req, res) => {
  handleError(res, 400, "path not found");
});

module.exports = router;
