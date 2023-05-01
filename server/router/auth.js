const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("home router");
});

// register route

router.post("/register", async (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;
  //   res.send("register");
  if (!name || !email || !phone || !password || !confirmPassword) {
    return res.status(422).json({
      messsage: "error:fill all the input",
    });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already register" });
    }
    const user = new User({ name, email, phone, password, confirmPassword });

    const userData = await user.save();
    if (userData) {
      res.status(201).json({
        messsage: "register successfully",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "fill all the input field" });
    }
    const userLogin = await User.findOne({ email: email });
    // const userPassword = await User.findOne({ password: password });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        return res.status(400).json({ error: "invalid credential" });
      } else {
        return res.status(404).json({ message: "succesfully login " });
      }
    } else {
      return res.status(400).json({ error: "invalid credential" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
