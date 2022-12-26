const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const config = require("./config");
const db = require("./db");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);
app.use((req, res, next) => {
  if (!req.session.username) {
    if (req.path != "/login" && req.path != "/registeration") {
      res.redirect("/login");
    }
  }

  next();
});
app.use(require("./routes"));

db.connect().then(() => {
  app.listen(config.port, () => {
    console.log("Server is running on http://localhost:" + config.port);
  });
});
