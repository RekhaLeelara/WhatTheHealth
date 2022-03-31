const express = require("express");
const app = express();
const server = require("http").Server(app);
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});
app.use(express.static('public'))
server.listen(3030);