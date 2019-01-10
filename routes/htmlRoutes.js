var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
  // Load signup page
  app.get("/", function(req, res) {
    return res.render("index");
  });
  
<<<<<<< HEAD
  // app.get("/questions", function(req, res) {
  //   return res.render("questions");
  // });

  // app.get("/profile", function(req, res) {
  //   return res.render("profile");
  // });
   
  // Load login page
  // app.get("/", function(req, res) {
  //   res.render("index");
  // });
=======
  app.get("/questions", isAuthenticated, function(req, res) {
    db.User.findOne({
      where: {
        id: req.user.id
      },
      include: [db.Skill]
    }).then(function(dbUser) {
      res.render("questions", { user: dbUser });
    });
  });
>>>>>>> 3b377882d22fbd9494b6446dc4d1ffbe9a18e734

  // Load profile page
  app.get("/profile", isAuthenticated, function(req, res) {
    db.User.findOne({
      where: {
        id: req.user.id
      },
      include: [db.Skill]
    }).then(function(dbUser) {
      res.render("profile", { user: dbUser });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

