const express = require("express");
const users = require("../db/users");

const router = express.Router();

router.get("/login", (req, res) => {
  const message = req.session.message;
  req.session.message = null;

  res.render("login", { message });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  users.userExists(username).then((exists) => {
    if (!exists) {
      res.render("login", { message: "This user does not exist" });
    } else {
      users.isUsernameAndPasswordValid(username, password).then((isValid) => {
        if (isValid) {
          req.session.username = username;
          res.redirect("/");
        } else {
          res.render("login", { message: "Invalid username or password" });
        }
      });
    }
  });
});

module.exports = router;
