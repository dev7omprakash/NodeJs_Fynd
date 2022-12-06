const MongoClient = require("mongodb").MongoClient;

exports.connectDB = function (db) {
  const url =
    "mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000";
  const mongoClient = new MongoClient(url);
  mongoClient.connect();
  return mongoClient.db(db);
};
