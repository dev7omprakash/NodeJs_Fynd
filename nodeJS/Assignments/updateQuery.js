const MongoClient = require("mongodb").MongoClient;

let mongoClient;
const url = "mongodb://localhost:27017";
try {
  mongoClient = new MongoClient(url);
  mongoClient.connect();

  const db = mongoClient.db("company");
  const collection = db.collection("employee");
  collection.findOne({}, function (err, result) {
    //console.log(result);
    if (err) throw err;
    if (result.ename == "vipul") {
      console.log("vipul updating...!");
      collection.updateOne({ ename: "vipul" }, { $set: { eage: "42" } });
    }
  });
} catch (err) {
  console.log(err);
}
