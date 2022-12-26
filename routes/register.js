const express = require("express");
const auth = require("../db/auth");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("registration");
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.render("registration", {
      error: "Username and password are required.",
    });
    return;
  }

  auth.userExists(username).then((exists) => {
    if (exists) {
      res.render("registration", { error: "Username already exists." });
    } else {
      auth.registerUser(username, password).then(() => {
        res.redirect("/login?success=true");
      });
    }
  });
});

module.exports = router;
