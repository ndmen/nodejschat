"use strict";

const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const server = require("http").Server(app);
const io = require("socket.io")(server, {serveClient: true});

nunjucks.configure("./client/views", {
    autoescape: true,
    express: app
});

app.use("/assets", express.static("./client/public"));

app.get("/", (req, res) => {
    res.render("index.html", { date: new Date() });
});

app.listen(3000, () => {
    console.log("Server has been started on port 3000");
});