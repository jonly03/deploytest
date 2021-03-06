const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome back home");
});

server.get("/github", (req, res) => {
  res.send("Welcome to github, not really");
});

let PORT = process.env.PORT ? process.env.PORT : 3000;

server.listen(PORT, () => {
  console.log("server listening");
});
