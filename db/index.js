const config = require("../config");
const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.MONGO_URI || config.connectionString);

function connect() {
  return client
    .connect()
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((e) => {
      console.log("Error while connecting to database.");
      console.error(e);
    });
}

const db = client.db(config.databaseName);

module.exports = {
  connect,
  db,
};
