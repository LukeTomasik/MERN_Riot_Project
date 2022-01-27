const express = require("express");
const mongoose = require("mongoose");

const getRequestRoutes = require('./routes/getRequests')

// allows env to read out database
require("dotenv").config();

// cors for browser
const cors = require("cors");

// to use express dependency
const app = express();
app.use(cors())
app.use(express.json());

//connection to database

mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);

//get Data from client website

app.use('/',getRequestRoutes)


app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
