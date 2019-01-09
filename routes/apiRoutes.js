var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Get all user data
  app.get("/api/users/:id", isAuthenticated, function(req, res) {
    db.User.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.get("/api/users/:id", isAuthenticated, function(req, res) {
    db.Users.update({
      UserId: req.user.id,
      
    }).then(function(newUser) {
      res.json(newUser);
    });

    // respond to ajax request in sign-up.js
    app.post("/api/signup", function(req, res) {
      console.log(req.body);
      db.User.create(req.body)
        .then(function() {
          res.redirect(307, "/api/login");
        })
        .catch(function(err) {
          res.status(422).json(err.errors[0].message);
        });
    });

  app.put("/api/user", isAuthenticated, function(req, res){
    // update the user by id using req.user.id 
    // fill out the rest from the body of the request
    // respond back with the updated user
    if(err) {
      return res.status(400).send(data);
    }
    return res.json(user)

  });

  app.get("/api/user", function(req, res){
    db.User.findall({}).then(function(dbUsers){
      res.json(dbUsers);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};

