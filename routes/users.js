const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("userlist");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

module.exports = router;
