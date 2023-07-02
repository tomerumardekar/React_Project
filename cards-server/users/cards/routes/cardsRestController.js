const express = require("express");
const { handleError } = require("../../../utils/handleErrors");
const {
  getCards,
  getMyCards,
  getCard,
  createCard,
} = require("../models/cardsAccessDataService");
const normalizeCard = require("../helpers/normalizeCard");
const cardValidationService = require("../validation/cardValidationService");
const validateCard = require("../validation/cardValidationService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    return res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/my-cards", async (req, res) => {
  try {
    const userId = "5f78c5a5e9a38b2e77c42345";
    const card = await getMyCards(userId);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await getCard(id);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let card = req.body;
    const user = {
      _id: "5f78c5a5e9a38b2e77c42345",
      isBusiness: true,
      isAdmin: true,
    };

    if (!user.isBusiness)
      return handleError(res, 403, "Authentication Error: Unauthorize user");

    const validationError = validateCard(card);
    if (validationError) {
      return handleError(res, 400, "validationError");
    }
    card = await normalizeCard(card, user._id);
    card = await createCard(card);
    return res.status(201).send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let card = req.body;
    const cardId = req.params.id;
    const user = {
      _id: "5f78c5a5e9a38b2e77c42345",
      isBusiness: true,
      isAdmin: true,
    };
    if (!user.isAdmin) {
      if (user._id !== card.user_id) {
        const message =
          "Authorization Error: Only the user who created the business card can update its details";
        return handleError(res, 403, message);
      }
    }
    const validationError = validateCard(card);
    if (validationError) {
      return handleError(res, 400, "validationError");
    }
    card = await normalizeCard(card);
    card = await updateCard(cardId, card);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const cardId = req.params.id;
    const userId = "5f78c5a5e9a38b2e77c42345";
    const card = await likeCard(cardId, userId);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cardId = req.params.id;
    const user = {
      _id: "5f78c5a5e9a38b2e77c42345",
      isBusiness: true,
      isAdmin: true,
    };
    const card = await deleteCard(cardId, user);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;
