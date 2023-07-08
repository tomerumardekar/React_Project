const { createError } = require("../../../utils/handleErrors");
const Card = require("./mongodb/card");

const DB = config.get("DB");
const createCard = async (normalizedCard) => {
  if (DB == "DB") {
    try {
      let card = new Card(normalizedCard);
      await card.save();
      return Promise.resolve(card);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("Cards Not found");
  }
};

const getCards = async () => {
  if (DB == "MONGODB") {
    try {
      const cards = await Card.find();
      return Promise.resolve(cards);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("Cards Not found");
  }
};

const getCard = async (cardId) => {
  if (DB == "MONGODB") {
    try {
      const card = await Card.findById(cardId);
      if (!card) throw new Error("The card with this id didnt found");
      return Promise.resolve(card);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("Cards Not found");
  }
};

const getMyCards = async (userId) => {
  if (DB == "MONGODB") {
    try {
      let myCards = await Card.find({ user_id: userId });
      return Promise.resolve(myCards);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("Cards Not found");
  }
};

const updateCard = async (cardId, normalizedCard) => {
  if (DB == "MONGODB") {
    try {
      let card = await Card.findByIdAndUpdate(cardId, normalizedCard, {
        new: true,
      });
      if (!card) {
        throw new Error("The card with this id didnt found");
      }
      return Promise.resolve(card);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("Cards Not found");
  }
};

const likeCard = async (cardId, userId) => {
  if (DB == "MONGODB") {
    try {
      let card = await Card.findById(cardId);
      if (!card)
        throw new Error("A card with this ID cannot be found in the database");

      if (card.likes.includes(userId)) {
        card.likes = card.likes.filter((like) => like !== userId);
      } else {
        card.likes.push(userId);
      }

      await card.save();
      return Promise.resolve(card);
    } catch (error) {
      return createError("mongoose", error);
    }
  } else {
    Promise.resolve("Cards Not found");
  }
};

const deleteCard = async (cardId, user) => {
  if (DB === "MONGODB") {
    try {
      let card = await Card.findById(cardId);

      if (!card)
        throw new Error("A card with this ID cannot be found in the database");

      if (!user.isAdmin && user._id !== card.user_id.toString())
        throw new Error(
          "Authorization Error: Only the user who created the business card or admin can delete this card"
        );
      card = await Card.findByIdAndDelete(cardId);
      return Promise.resolve(card);
    } catch (error) {
      return createError("Mongoose", error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

exports.deleteCard = deleteCard;
exports.createCard = createCard;
exports.getCards = getCards;
exports.getCard = getCard;
exports.getMyCards = getMyCards;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
