const { static } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const viewRouter = require("./routers/viewRouter");

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   //   res.send("Hello World");
//   res.render("index");
// });

app.use("/", viewRouter);

module.exports = app;
