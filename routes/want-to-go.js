const express = require("express");
const users = require("../db/users");

const router = express.Router();

router.get("/want-to-go", (req, res) => {
  users.getWantToGo(req.session.username).then((wantToGo) => {
    res.render("wanttogo", { wantToGo });
  });
});

router.post("/want-to-go", (req, res) => {
  const { destination } = req.body;

  users.wantsToGoTo(req.session.username, destination).then((wantsToGo) => {
    if (wantsToGo) {
      res.render(destination, {
        message: "Already exists in wants to go list.",
      });
    } else {
      users.addToWantToGo(req.session.username, destination).then(() => {
        res.render(destination, { message: "Added to wants to go list." });
      });
    }
  });
});

module.exports = router;
