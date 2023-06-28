const express = require("express");
const { handleError } = require("../../../utils/handleErrors");
const { getCards } = require("../models/cardsAccessDataService");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    return res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cardId = req.params.id;
    const card = await Card.findById(cardId);

    if (!card) {
      // Card not found
      return res.status(404).json({ error: "Card not found" });
    }

    return res.json(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/my-cards", async (req, res) => {
  try {
    const userId = req.userId;
    const myCard = await Card.find({ userId: userId });

    if (myCard.length == 0) {
      // Card not found
      return res.status(404).json({ error: "my Card not found" });
    }

    return res.json(myCard);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const cardData = req.body;
    const user = req.user;
    //nurmalize
    const card = new Card({
      ...cardData,
      userId: user.id,
    });
    await card.save();
    return res.status(201).json(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;
