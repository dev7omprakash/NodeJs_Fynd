const express = require("express");

const app = express();

app.get("/", function (req, res) {
  console.log("This is the get request from '/' page");
  res.send("Hello, world!");
});

const server = app.listen(8000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is running at ${port}`);
  console.log(`Server is running at ${host}`);
});
