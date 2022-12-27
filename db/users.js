const { db } = require(".");
const config = require("../config");

const collectionName = config.usersCollectionName;

function userExists(username) {
  return db
    .collection(collectionName)
    .findOne({ username })
    .then((user) => {
      return user != null;
    });
}

function isUsernameAndPasswordValid(username, password) {
  return db
    .collection(collectionName)
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

  return db.collection(collectionName).insertOne(user);
}

function addToWantToGo(username, destination) {
  return db
    .collection(collectionName)
    .updateOne({ username }, { $push: { wantToGo: destination } });
}

function wantsToGoTo(username, destination) {
  return db
    .collection(collectionName)
    .findOne({ username })
    .then((user) => {
      return user.wantToGo.includes(destination);
    });
}

function getWantToGo(username) {
  return db
    .collection(collectionName)
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
