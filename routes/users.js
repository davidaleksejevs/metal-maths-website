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

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  console.log(id);
});

module.exports = router;
