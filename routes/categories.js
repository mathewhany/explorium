const express = require("express");
const router = express.Router();

router.get("/islands", (req, res) => {
  res.render("islands");
});

router.get("/cities", (req, res) => {
  res.render("cities");
});

router.get("/hiking", (req, res) => {
  res.render("hiking");
});

module.exports = router;
