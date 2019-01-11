var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
  // Load signup page
  app.get("/", function(req, res) {
    return res.render("index");
  });
  
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

  // Load profile page
  app.get("/profile", isAuthenticated, function(req, res) {
    db.User.findOne({
      where: {
        id: req.user.id
      },
      include: [db.Skill]
    }).then(function(dbUser) {
      db.User.findAll({
        where: {
          appType : req.user.appType,
          id: {
            $ne: req.user.id
          }
        }
        
      }).then(function (dbMatches) {
        res.render("profile", { user: dbUser, matches: dbMatches });
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
    
};