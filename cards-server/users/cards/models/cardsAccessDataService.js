const Card = require("./mongodb/card");

const DB = "MONGODB";

const createCard = async (normalizedCard) => {
  if (DB == "MONGODB")
    try {
      let card = new Card(normalizedCard);
      await card.save();
      console.log(card);
    } catch (error) {
      console.log(error);
    }
};

const getCards = async () => {
  if (DB == "MONGODB")
    try {
      const cards = await Card.find();
      console.log(cards);
    } catch (error) {
      console.log(error);
    }
};

const getCard = async (cardId) => {
  if (DB == "MONGODB")
    try {
      const card = await Card.findById(cardId);
      console.log(card);
    } catch (error) {
      console.log(error);
    }
};

const getMyCards = async (userId) => {
  if (DB == "MONGODB")
    try {
      let cards = await Card.find({ user_id: userId });
      console.log(cards);
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
      console.log(card);
    } catch (error) {
      console.log(error);
    }
};

const likeCard = async (cardId, userId) => {
  if (DB == "MONGODB")
    try {
      let card = await Card.findById(cardId);
      if (!card)
        throw new Error("A card with this ID cannot be found in the database");

      if (card.likes.includes(userId)) {
        card = await Card.findByIdAndUpdate(
          cardId,
          { $pull: { likes: userId } },
          { new: true }
        );
      } else {
        card = await Card.findByIdAndUpdate(
          cardId,
          { $push: { likes: userId } },
          { new: true }
        );
      }
      console.log(card);
    } catch (error) {
      console.log(error);
    }
};

exports.createCard = createCard;
exports.getCards = getCards;
exports.getCard = getCard;
exports.getMyCards = getMyCards;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
