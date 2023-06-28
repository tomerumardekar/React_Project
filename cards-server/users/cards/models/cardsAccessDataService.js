const Card = require("./mongodb/card");

const DB = "MONGODB";

const createCard = async (normalizedCard) => {
  if (DB == "MONGODB")
    try {
      let card = new Card(normalizedCard);
      await card.save();
      return Promise.resolve(card);
    } catch (error) {
      return createError("createCard", error);
    }
};

const getCards = async () => {
  if (DB == "MONGODB")
    try {
      const cards = await Card.find();
      return Promise.resolve(cards);
    } catch (error) {
      console.log(error);
    }
};

const getCard = async (cardId) => {
  if (DB == "MONGODB")
    try {
      const card = await Card.findById(cardId);
      return Promise.resolve(card);
    } catch (error) {
      throw new Error("The card with this id didnt found");
    }
};

const getMyCards = async (userId) => {
  if (DB == "MONGODB")
    try {
      let cards = await Card.find({ user_id: userId });
      return Promise.resolve(card);
    } catch (error) {
      console.log(error);
    }
};

const updateCard = async (cardId, normalizedCard) => {
  if (DB == "MONGODB")
    try {
      let card = await Card.findByIdAndUpdate(cardId, normalizedCard, {
        new: true,
      });
      if (!card) {
        throw new Error("The card with this id didnt found");
      }
      return Promise.resolve(card);
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  }
};
const deleteCard = async (cardId, userId, isAdmin) => {
  try {
    let card = await Card.findById(cardId);

    if (!card) {
      console.log("Card not found");
      return;
    }

    if (isAdmin || card.userId === userId) {
      const deletedCard = await Card.findByIdAndDelete(cardId);
      console.log("The card deleted is", deletedCard);
    } else {
      console.log("Unauthorized to delete this card");
    }
  } catch (error) {
    console.log("There was an error deleting this card:", error);
  }
};

exports.deleteCard = deleteCard;
exports.createCard = createCard;
exports.getCards = getCards;
exports.getCard = getCard;
exports.getMyCards = getMyCards;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
