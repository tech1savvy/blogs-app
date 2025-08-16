require("dotenv").config();

const express = require("express");
const path = require("path");

const connectdb = require("./db");

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;

connectdb(MONGODB_URL);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`server is listening on ${PORT}`);
});
