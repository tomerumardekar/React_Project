const User = require("./mongodb/User");
const { createError } = require("../../../utils/handleErrors");
const DB = "MONGODB";

const registerUser = async (normalizedUser) => {
  if (DB == "MONGODB") {
    try {
      //check if the email already exists
      const existingUser = await User.findOne({ email: normalizedUser.email });
      if (existingUser) {
        return Promise.resolve("Email already exists");
      }
      let user = new User(normalizedUser);
      await user.save();
      return Promise.resolve(user);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("users Not found");
  }
};

const loginUser = async (email, password) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return Promise.resolve("User not found");
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return Promise.resolve("Invalid password");
      }
      return Promise.resolve(user);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    return Promise.resolve("Database not supported");
  }
};

const getUsers = async () => {
  if (DB == "MONGODB") {
    try {
      const users = await User.find();
      return Promise.resolve(users);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("users Not found");
  }
};

const getUser = async (userId) => {
  if (DB == "MONGODB") {
    try {
      const user = await User.findById(userId);
      if (!user) throw new Error("The user with this id didnt found");
      return Promise.resolve(user);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("user Not found");
  }
};

const updateUser = async (userId, normalizedUser) => {
  if (DB == "MONGODB") {
    try {
      let user = await User.findByIdAndUpdate(userId, normalizedUser, {
        new: true,
      });
      if (!user) {
        throw new Error("The user with this id didnt found");
      }
      return Promise.resolve(user);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("user Not found");
  }
};

const changeUserBusinessStatus = async (userId, IsBusiness) => {
  if (DB == "MONGODB") {
    try {
    } catch (error) {}
  }
};

const deleteUser = async (userId, user) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findById(userId);

      if (!user)
        throw new Error("A card with this ID cannot be found in the database");

      if (!user.isAdmin)
        throw new Error(
          "Authorization Error: Only the user who created the business card or admin can delete this card"
        );
      user = await User.findByIdAndDelete(userId);
      return Promise.resolve(user);
    } catch (error) {
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("user deleted not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;
