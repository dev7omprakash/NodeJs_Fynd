const express = require("express");

const app = express();

/* 1 HTTP Feature
client-server
get,post,set,put,delete
URL Patter(Route) 
*/

/* express is a minimal and flexible nodejs web application */
/* The Express philosophy is to provide small, robust tooling for
HTTP servers, making it a great solution for single page
applications, websites, hybrids, or public HTTP APIs.*/

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
