const port = 3003;
const express = require("express");
const server = express(); //starting express
const allowCors = require("/cors");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(allowCors);

server.listen(port, function () {
  console.log(`Backend is running on ${port}`);
});

module.exports = server;
