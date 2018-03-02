// requiring dependencies
var path = require("path");

var friends = require("../data/friends.js");



// grabbing infmoration/data
app.get("/app/friends", function (req, res) {
    res.json(friendsData);
});
app.post("app/friends", function (req, res) {

});