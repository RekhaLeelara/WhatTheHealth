var express = require("express");
var path = require("path");

var app = express();
var PORT = 3306;

class appointment {
    constructor(n, p, e, i) {
        this.name = n;
        this.phone = p;
        this.id = i;
    }
};

var reservations = [];
var waitlist = [];


// Get appointment
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, " "));
    
});

app.get("/appointment", function(req, res) {
    res.sendFile(path.join(__dirname, " "));
    hitcount++;
});

// See how many ahead in the queue

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
    hitcount++;
});

// Book new apointment if necessary

app.post("/api/new", function(req, res) {
    var newappointment = req.body;
});

// Starts the server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

