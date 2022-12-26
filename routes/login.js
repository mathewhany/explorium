const express = require("express");
const auth = require("../db/auth");

const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  auth.userExists(username).then((exists) => {
    if (!exists) {
      res.render("login", { error: "This user does not exist" });
    } else {
      auth.isUsernameAndPasswordValid(username, password).then((isValid) => {
        if (isValid) {
          req.session.username = username;
          res.redirect("/");
        } else {
          res.render("login", { error: "Invalid username or password" });
        }
      });
    }
  });
});

module.exports = router;
