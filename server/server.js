const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));
// const router = require("./router/auth");

const User = require("./model/userSchema");

const middleware = (req, res, next) => {
  console.log("middleware");
  next;
};
// middleware();

// app.get("/", (req, res) => {
//   res.send("home app");
// });
// app.get("/about", middleware, (req, res) => {
//   res.send("about");
// });
// app.get("/contact", (req, res) => {
//   res.send("contact");
// });
// app.get("/signin", (req, res) => {
//   res.send("signin");
// });
// app.get("/signup", (req, res) => {
//   res.send("signup");
// });

app.listen(4000, () => {
  console.log("connected to 4000");
});
