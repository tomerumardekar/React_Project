const mongoose = require("mongoose");

const userName = "tzachd1232";
const password = "Abc123";

mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster0.x6eafhe.mongodb.net/`
  )
  .then(() => console.log("connected to MongoDb Atlas!"))
  .catch((error) => console.log(`could not connect to mongoDb: ${error}`));
