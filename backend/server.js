require("dotenv").config();
const express = require("express");
const userRoute = require("./routes/userRoute");
const mongoose = require("mongoose");

const app = express();

//middlewhere to phase objects to json
app.use(express.json());

//use created routes (routes are triggered when visited to URL api/posts)
app.use("/api/", userRoute);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("db connection is OK listerning to port", process.env.PORT);
    });
  })
  .catch((ERR) => {
    console.log(ERR);
  });
