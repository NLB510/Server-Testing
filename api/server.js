const express = require("express");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up"});
});

server.post("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.put("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.delete("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});


module.exports = server;
