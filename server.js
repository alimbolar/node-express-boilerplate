const express = require("express");
const app = require("./app");
const path = require("path");

const server = app.listen(3000, function () {
  console.log("Server is running at Port 3000");
});
