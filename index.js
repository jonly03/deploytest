const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome back home");
});

server.listen(3000, () => {
  console.log("server listening");
});
