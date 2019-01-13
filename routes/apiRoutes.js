var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// const Op = Sequelize.Op

module.exports = function (app) {
  // Get all data for one user using their unique id
  // app.get("/api/user/:id", isAuthenticated, function (req, res) {
  //   db.User.findAll({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // Delete an example by id
  app.delete("/api/user/:id", isAuthenticated, function (req, res) {
    db.User.destroy({ where: { id: req.user.id } }).then(function (

    ) {
      // res.redirect("/");
    });
  });

  // Using the passport.authenticate middleware so if user has valid login credentials, send them to profile page otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to configuration of the Sequelize User Model. If the user is created successfully, proceed to log the user in, otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create(req.body)
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        console.error(err);

        res.status(422).json(err.errors[0].message);
      });
  });



  app.post("/api/skill", isAuthenticated, function (req, res) {
    // console.log(req.user);
    var skillBody = req.body;
    skillBody.UserId = req.user.id;

    db.Skill.create(skillBody).then(function (dbskills) {
      res.json(dbskills);
    })
  });


  // back end handler to prevent duplication on skills table
  app.delete("/api/skill", function (req, res) {
    console.log("Let's see this happen");
    db.Skill.findAll({
      limit: 1,
      where: {},
      order: [["createdAt", "DESC"]]
    }).then(function (data) {
      console.log(JSON.stringify(data[0].id));
      db.Skill.destroy({
        where: {id: JSON.stringify(data[0].id)},
      }).then(function (data) {
        console.log('deleted');
        res.json(data);
      })
    })
  });


  app.put("/api/user", isAuthenticated, function (req, res) {
    // update the user by id using req.user.id 
    db.User.update(req.body, {
      where: { id: req.user.id }
    }).then(function (data) {
      res.json(data);
    })
      // fill out the rest from the body of the request
      // respond back with the updated user
      .catch(function (err) {
        res.status(400).send(err);
      });
  });

  // console.log(req.body.userLevel)
  app.get("/api/user/compare", isAuthenticated, function (req, res) {
    db.User.findAll({
      where: {
        userLevel: req.user.userLevel,
        id: {
          $ne: req.user.id
        }
      }

    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });


  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });



  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // creating a user in the favorite table when connect is clicked
  app.post("/api/user/connect", isAuthenticated, function (req, res) {
    var favBody = req.body;
    favBody.UserId = req.user.id;
    db.Favorite.create(favBody
    ).then(function (data) {

      res.json(data);
    })
      .catch(function (err) {
        res.status(400).send(err);
      });
  });

  app.post("/api/user/disconnect", isAuthenticated, function (req, res) {
    var delFavBody = req.body;
    delFavBody.UserId = req.user.id;
    db.Favorite.destroy({where: {UserId: delFavBody.UserId}
    }).then(function (data) {

      res.json(data);
    })
      .catch(function (err) {
        res.status(400).send(err);
      });
  });
};