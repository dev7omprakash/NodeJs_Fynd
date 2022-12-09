const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.json());
var database;

app.get("/", (req, res) => {
  console.log("We are at home page");
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/users", (req, res) => {
  database
    .collection("client")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.listen(8000, () => {
  console.log("Server is running at 8000....!");
  MongoClient.connect(
    "mongodb://localhost:27017",
    { useNewUrlParser: true },
    (err, res) => {
      if (err) throw err;
      database = res.db("company");
      console.log("Connected to database...!");
    }
  );
});
