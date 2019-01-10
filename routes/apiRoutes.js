var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {


  // respond to ajax request in sign-up.js
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out - returns to landing page
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
}