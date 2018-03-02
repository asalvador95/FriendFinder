// requiring dependencies
var require ("path");
// exporting the function below
// with param of "app"
module.exports = function (app) {

    // grabbing the information/data called
    // "friends" from home html,
   
    app.get("friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    });

     // "survey" survey html
   
    app.get("survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../survey.html"));
    });

     // and all from survey html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../survey.html"));
    });

};

