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
  const user = {
    username,
    password,
    wantToGo: [],
  };

  return db.collection("users").insertOne(user);
}

function addToWantToGo(username, destination) {
  return db
    .collection("users")
    .updateOne({ username }, { $push: { wantToGo: destination } });
}

function wantsToGoTo(username, destination) {
  return db
    .collection("users")
    .findOne({ username })
    .then((user) => {
      return user.wantToGo.includes(destination);
    });
}

function getWantToGo(username) {
  return db
    .collection("users")
    .findOne({ username })
    .then((user) => {
      return user.wantToGo;
    });
}

module.exports = {
  isUsernameAndPasswordValid,
  registerUser,
  userExists,
  addToWantToGo,
  wantsToGoTo,
  getWantToGo,
};
