const express = require("express");

const server = express();

//Router
const userRouter = require('./Routes/usersRouter')

server.use(express.json());
server.use('/api/users', userRouter);








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
