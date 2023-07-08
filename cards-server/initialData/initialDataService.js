const {
  registerUser,
} = require("../users/users/models/usersAccessDataService");
const data = require("./initialData.json");
const normalizeUser = require("../users/users/helpers/normalizeUser");
const { generateUserPassword } = require("../users/users/helpers/bcrypt");
const chalk = require("chalk");

const generateInitialCards = async () => {
  const { cards } = data;
  cards.forEach(async (card) => {
    try {
      const userId = "64a533d428eb0c3a32dcf2b2";
      card = await normalizeCard(card, userId);
      await createCard(card);
      return;
    } catch (error) {
      return console.log(chalk.redBright(error.message));
    }
  });
};

const generateInitialUsers = async () => {
  const { users } = data;
  users.forEach(async (user) => {
    try {
      user = await normalizeUser(user);
      user.password = generateUserPassword(user.password);
      await registerUser(user);
      return;
    } catch (error) {
      return console.log(chalk.redBright(error.message));
    }
  });
};

module.exports = {
  generateInitialCards,
  generateInitialUsers,
};
