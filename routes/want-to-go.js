const express = require("express");
const auth = require("../db/auth");

const router = express.Router();

router.get("/want-to-go", (req, res) => {
  res.render("wanttogo");
});


module.exports = router;
