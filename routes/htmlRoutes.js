var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
   
  // Load signup/signin landing page
   app.get("/", function(req, res) {
    return res.render("index");
  });

  
// catch for any http route without a defined path
  app.get("*", function(req, res) {
    res.render("404");
  });

  // catch for any http route without a defined path
  app.get("/profile", isAuthenticated, function(req, res) {
    res.render("profile");
  });
};