const express = require("express");

const app = express();

app.get("/", function (req, res) {
  console.log("This is the get request from '/' page");
  res.send("Hello, world!");
});

app.get("/hello", function (req, res) {
  console.log("This is the get request from '/hello' page");
  res.send("Hello, world! from /hello");
});

app.post("/hello", function (req, res) {
  console.log("This is the get request from '/hello' page");
  res.send("Hello, world! from /hello");
});

app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });
 
const server = app.listen(8000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is running at ${port}`);
  console.log(`Server is running at ${host}`);
});


