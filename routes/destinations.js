const express = require('express');
const router = express.Router();

router.get("/inca", (req, res) => {
  res.render("inca");
});

router.get("/paris", (req, res) => {
  res.render("paris");
});

router.get("/rome", (req, res) => {
  res.render("rome");
});

router.get("/santorini", (req, res) => {
  res.render("santorini");
});

router.get("/bali", (req, res) => {
  res.render("bali");
});

router.get("/annapurna", (req, res) => {
  res.render("annapurna");
});

module.exports = router;