const express = require("express");
const users = require("../db/users");
const router = express.Router();

router.get("/registration", (req, res) => {
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

  users.userExists(username).then((exists) => {
    if (exists) {
      res.render("registration", { error: "Username already exists." });
    } else {
      users.registerUser(username, password).then(() => {
        req.session.message = "Registered successfully.";
        res.redirect("/login");
      });
    }
  });
});

module.exports = router;
