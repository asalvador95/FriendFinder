// require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express;

// locating port
var PORT = process.env.PORT || 3030;


// app.use(bodyParser.urlencoded({ extended: false}));

// app.use(bodyParser.json());


// get the path to the routes
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);



// console logging / locating port
app.listen(PORT, function() {
    console.log("App listening..." + PORT);
});