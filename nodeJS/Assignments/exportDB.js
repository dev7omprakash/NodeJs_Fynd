const MongoClient = require("mongodb").MongoClient;
const mongoClient = require("./connectMongo");

try {
  const db = mongoClient.connectDB("company");
  const item = {
    name: "Sen gupta",
    age: 38,
    cpay: 22000,
  };

  db.collection("products").insertOne(item);
} catch (err) {
  console.log(err);
}
