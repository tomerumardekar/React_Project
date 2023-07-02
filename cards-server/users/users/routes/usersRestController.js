const express = require("express");
const { handleError } = require("../../../utils/handleErrors");
const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  changeUserBusinessStatus,
  deleteUser,
} = require("../models/usersAccessDataService");

const normalizeUser = require("../helpers/normalizeUser");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let user = req.body;
    user = normalizeUser(user);
    user.password = generateUserPassword(user.password);
    user = await registerUser(user);
    return res.status(201).send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("./login", async (req, res) => {
  try {
    let user = req.body;
    const token = await loginUser(user);
    return res.send(token);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const user = {
      _id: "5f78c5a5e9a38b2e77c42345",
      isBusiness: true,
      isAdmin: true,
    };
    if (!user.isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin user to see all users in the database"
      );
    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let _id = "5f78c5a5e9a38b2e77c42345";
    let isAdmin = true;
    if (_id !== id && !isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin type user or the registered user to see this user details"
      );
    const user = await getUser(id);
    returnres.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let user = req.body;
    user = normalizeUser(user);
    user = await updateUser(id, user);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await changeUserBusinessStatus(id);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;
