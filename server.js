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
  const nonAuthRoutes = ["/login", "/register"];

  if (nonAuthRoutes.includes(req.path)) {
    if (req.session.username) {
      res.redirect('/');
      return;
    }
  } else {
    if (!req.session.username) {
      res.redirect("/login");
      return;
    }
  }

  return next();
});

app.use(require("./routes"));

db.connect().then(() => {
  const port = process.env.PORT || config.port
  
  app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
  });
});
