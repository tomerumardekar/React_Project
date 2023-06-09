const express = require("express");
const limiter = require("./utils/limiter");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid"); // import uuidv4 function from the uuid package

const app = express();
app.use(cors({ origin: "*" }));
const key = "secret";
app.use(express.json());

const cards = [
  {
    _id: "eafeswfwr2326346tf3254f",
    title: "Modern Business Card",
    subtitle: "Clean and professional design, perfect for any industry",
    description:
      "Introduce your business in style with our modern business card. The sleek and minimalist design is perfect for any industry, and will make a lasting impression on your clients and business partners.",
    phone: "050-5386522",
    email: "info@yourbusiness.com",
    web: "https://www.yourbusiness.com",
    about:
      " Modern Business Card: This clean and professional design is perfect for any industry, whether you're a freelancer, business owner, or corporate employee. With its minimalist layout and bold typography, it makes a powerful statement and leaves a lasting impression.Looking to stand out in the world of business? This modern business card is the perfect way to do it. Its sleek and sophisticated design is sure to impress even the most discerning clients and colleagues.Don't settle for a boring business card. With this modern design, you'll make a statement wherever you go. Its minimalist look and bold typography are sure to turn heads and leave a lasting impression.",
    image: {
      imageUrl: "assets/images/business-card-top-image.jpg",
      alt: "image",
    },
    address: {
      state: "TLV",
      country: "Israerl",
      street: "Agas",
      houseNumber: 39,
      city: "Ashdod",
      zip: 1312,
    },
    BusinessNumber: 31245641,
    likes: [],
    user_id: "4235234234mfnjrb2h3vbry23",
  },

  {
    _id: "daslfjhbasfjba123124123",
    title: "Creative Business Card",
    subtitle: "Stand out from the crowd with our unique and creative design",
    description:
      "Make a statement with our creative business card. The bold and unique design will set you apart from your competitors, and leave a lasting impression on anyone who receives it.",
    phone: "052-6005458",
    email: "info@yourbusiness.com",
    web: "https://www.yourbusiness.com",
    about:
      "Creative Business Card: Let your creativity shine with this unique and eye-catching business card. With its playful typography and bright colors, it's sure to stand out in a sea of standard designs.Want to show off your creative side? This business card is the perfect way to do it. Its fun and vibrant design is sure to make an impression and leave a lasting impact. Make a statement with this creative business card. Its bold typography and vibrant colors are sure to catch the eye of potential clients and make a lasting impression.",
    image: {
      imageUrl: "assets/images/business-card-top-image.jpg",
      alt: "Creative Business Card",
    },
    address: {
      state: "TLV",
      country: "Israerl",
      street: "Shaul HaMelech",
      houseNumber: 27,
      city: "Tel Aviv",
      zip: 1312,
    },
    BusinessNumber: 222222,
    likes: [],
    user_id: "4235234234mfnjrb2h3vbry23",
  },
  {
    _id: "asdfaa54sdf158as4ass",
    title: "Luxury Business Card",
    subtitle: "Elevate your brand with our premium, high-end design",
    description:
      "Impress your clients and business partners with our luxury business card. The premium design and high-quality materials will showcase your brand in the best possible light, and leave a lasting impression on anyone who receives it.",
    phone: "052-8980094",
    email: "info@yourbusiness.com",
    web: "https://www.yourbusiness.com",
    about:
      " Classic Business Card:Sometimes, simple is best. That's certainly the case with this classic business card. Its timeless design is perfect for any industry and is sure to make a lasting impression on clients and colleagues alike.Looking for a business card that will never go out of style? This classic design is the perfect choice. Its clean lines and simple typography are sure to convey professionalism and reliability.Don't let a flashy design overshadow your professionalism. With this classic business card, you'll make a statement with its timeless design and understated elegance.",
    image: {
      imageUrl: "assets/images/business-card-top-image.jpg",
      alt: "Luxury Business Card",
    },
    address: {
      state: "Israel",
      country: "Israerl",
      street: "Efroni",
      houseNumber: 18,
      city: "Shlomi",
      zip: 1312,
    },
    BusinessNumber: 333333,
    likes: [],
    user_id: "4235234234mfnjasdasdry23",
  },
];

const users = [
  {
    name: {
      first: "Tzach",
      middle: "",
      last: "Dabush",
    },
    phone: "055-5555555",
    email: "admin@admin.com",
    password: "Abc123!",
    address: {
      state: "Haifa",
      country: "Israel",
      city: "Haifa",
      street: "HaNasi",
      zip: 123456,
      houseNumber: 12,
    },
    image: {
      url: "www.example.com",
      alt: "profile image",
    },
    isBusiness: true,
    isAdmin: true,
    user_id: "4235234234mfnjrb2h3vbry23",
  },
  {
    name: {
      first: "Tzach1",
      middle: "",
      last: "Dabush1",
    },
    phone: "055-5555555",
    email: "admin1@admin.com",
    password: "Abc123!",
    address: {
      state: "Haifa",
      country: "Israel",
      city: "Haifa",
      street: "HaNasi",
      zip: 123456,
      houseNumber: 12,
    },
    image: {
      url: "www.example.com",
      alt: "profile image",
    },
    isBusiness: true,
    isAdmin: false,
    user_id: "4235234234mfnjasdasdry23",
  },
];
const verifyToken = (tokenFromClient) => {
  try {
    const userDataFromPayload = jwt.verify(tokenFromClient, key);
    return userDataFromPayload;
  } catch (error) {
    return null;
  }
};

app.get("/cards", (req, res) => {
  res.json(cards);
});

app.get("/cards/mycards", (req, res) => {
  const tokenFromClient = req.header("x-auth-token");
  if (tokenFromClient) {
    const userData = verifyToken(tokenFromClient);
    const user_id = userData.id; // Assume user_id is passed as a parameter in the body
    const userCards = cards.filter((c) => c.user_id === user_id);
    res.json(userCards);
  } else {
    res.status(404).send("login first");
  }
});
app.get("/cards/:cardId", (req, res) => {
  const cardId = req.params.cardId;
  const card = cards.find((card) => card._id === cardId);
  if (!card) {
    res.status(404).json({ error: "Card not found" });
  } else {
    res.json(card);
  }
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/cards", (req, res) => {
  const newId = Date.now().toString();
  const newCardWithId = { ...req.body, _id: newId };

  cards.push(newCardWithId);

  res.json(newCardWithId);
});

app.get("/cards/fav-cards", (req, res) => {
  const tokenFromClient = req.header("x-auth-token");
  if (tokenFromClient) {
    const userData = verifyToken(tokenFromClient);
    const user_id = userData.id; // Assume user_id is passed as a parameter in the body
    const favCards = cards.filter((c) => c.likes.includes(user_id));
    res.json(favCards);
  } else {
    res.status(404).send("login first");
  }
});

app.post("/add-new-card", (req, res) => {
  const newId = Date.now().toString();
  const newCardWithId = { ...req.body, _id: newId };

  cards.push({
    _id: newCardWithId._id,
    title: newCardWithId.title,
    subtitle: newCardWithId.subtitle,
    description: newCardWithId.description,
    phone: newCardWithId.phone,
    email: newCardWithId.email,
    image: { url: newCardWithId.imageUrl, alt: newCardWithId.imageAlt },
    address: {
      state: newCardWithId.state,
      country: newCardWithId.country,
      street: newCardWithId.street,
      houseNumber: parseInt(newCardWithId.houseNumber),
      city: newCardWithId.city,
      zip: newCardWithId.zip,
    },
  });

  res.json(newCardWithId);
});

app.delete("/cards/:id", (req, res) => {
  const cardIndex = cards.findIndex((c) => c._id === req.params.id);
  if (cardIndex === -1) {
    res.status(404).send("Card not found");
  } else {
    const deletedCard = cards.splice(cardIndex, 1)[0];
    res.json(deletedCard);
  }
});
app.put("/cards/:id", (req, res) => {
  const cardIndex = cards.findIndex((c) => c._id === req.params.id);

  if (cardIndex === -1) {
    res.status(404).send("Card not found");
  } else {
    const updatedCard = {
      ...cards[cardIndex],
      ...req.body,
      _id: req.params.id,
    };
    cards[cardIndex] = updatedCard;

    res.json(updatedCard);
  }
});

app.patch("/cards/:id", (req, res) => {
  const cardIndex = cards.findIndex((c) => c._id === req.params.id);
  if (cardIndex === -1) {
    res.status(404).send("Card not found");
  } else {
    const tokenFromClient = req.header("x-auth-token");
    if (tokenFromClient) {
      const userData = verifyToken(tokenFromClient);
      const user_id = userData.id;
      const card = cards[cardIndex];
      const userLiked = card.likes.includes(user_id);
      const updatedLikes = userLiked
        ? card.likes.filter((id) => id !== user_id)
        : [...card.likes, user_id];
      const updatedCard = { ...card, likes: updatedLikes };
      cards[cardIndex] = updatedCard;

      res.json(updatedCard);
    } else {
      res.status(404).send("in first");
    }
  }
});
app.post("/users/login", limiter, (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  const userDataForToken = {
    isAdmin: user.isAdmin,
    isBusiness: user.isBusiness,
    firstName: user.name.first,
    id: user.user_id,
    iat: new Date().getTime(),
    ...user,
  };
  const token = jwt.sign(userDataForToken, key);
  res.send(token);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  if (users.findIndex((user) => user.user_id === req.body.user_id) === -1) {
    const newUser = req.body;
    newUser.user_id = uuidv4(); // generate a new UUID and add it to the newUser object
    users.push(newUser);

    console.log(users);

    res.status(201).send({ message: "User added successfully." });
  } else {
    const index = users.findIndex((user) => user.user_id === req.body.user_id);

    users[index] = req.body;

    console.log(index, users);

    res.status(201).send({ message: "User updated successfully." });
  }
});

/* app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.user_id = uuidv4(); // generate a new UUID and add it to the newUser object
  users.push(newUser);
  res.status(201).send({ message: "User added successfully." });
}); */

const PORT = 8181;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
