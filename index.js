const path = require("path");
const exprees = require("express");
const mongoose = require("mongoose");
const { error } = require("console");
const app = exprees();

//connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then((result) => {
    console.log("mongodb connect");
  })
  .catch((error) => {
    console.log(error);
  });

app.set("views", path.dirname(__dirname, "views"));
app.set("view engine", "ejs");

//home
app.get("/", (req, res) => {
  res.send("ini adalah halaman home");
});

app.listen(3000, () => {
  console.log(`shop app listen on http://127.0.0.1:3000`);
});
