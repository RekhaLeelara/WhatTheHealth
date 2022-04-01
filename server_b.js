const path = require('path');
const express = require('express');
// Import express-session
// const session = require('express-session');
const exphbs = require('express-handlebars');
const app = express();
const server = require("http").Server(app);
const helpers = require('./utils/helpers');

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});
// app.use(express.static('public'))

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

server.listen(3030);