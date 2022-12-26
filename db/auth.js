const { db } = require(".");

function userExists(username) {
  return db
    .collection("users")
    .findOne({ username })
    .then((user) => {
      return user != null;
    });
}

function isUsernameAndPasswordValid(username, password) {
  return db
    .collection("users")
    .findOne({ username, password })
    .then((user) => {
      return user != null;
    });
}

function registerUser(username, password) {
  return db.collection("users").insertOne({ username, password });
}

module.exports = {
  isUsernameAndPasswordValid,
  registerUser,
  userExists
};
