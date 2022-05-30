const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("userlist");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

router.post("/", (req, res) => {
  res.send("user created");
});

router.get('/"id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

module.exports = router;
