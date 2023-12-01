const express = require("express");
const routerAuth = express.Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const users = [
  { id: 1, username: "Danny@gmail.com", password: "12345" },
  { id: 2, username: "Alexander@gmail.com", password: "54321" },
];

routerAuth.post("/login", (req, res) => {
  const { username, password } = req.body;
  const auth = users.some(
    (item) => item.username === username && item.password === password
  );

  if (auth) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "2h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "credenciales invalidas" });
  }
});

module.exports = routerAuth;
