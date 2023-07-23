require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const schoolRoute = require("./routes/schoolRoute");
const pdfRoute = require("./routes/pdfRoute");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

//middlewhere to phase objects to json
app.use(express.json());

//use created routes (routes are triggered when visited to URL api/posts)
app.use("/api", userRoute);
app.use("/api/schools", schoolRoute);
app.use("/api/pdf", pdfRoute);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "db connection is OK, Server is running listerning to port",
        process.env.PORT
      );
    });
  })
  .catch((ERR) => {
    console.log(ERR);
  });
