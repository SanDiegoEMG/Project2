var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
   
  // Load signup page
   app.get("/", function(req, res) {
    return res.render("index");
  });

  
// catch 
  app.get("*", function(req, res) {
    res.render("404");
  });
};