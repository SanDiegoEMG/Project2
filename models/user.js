// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating User table model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    //these entries come from modal on index.handlebars
    userName: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [3]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // these entries come from prompts on questions.handlebars
    userLevel: DataTypes.STRING,
    codingTime: DataTypes.STRING,
    projectIdea: DataTypes.STRING,
    github: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "github.com/join"
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "linkedin.com/start/join"
    },
    profileStatement: DataTypes.TEXT,
  });

  User.associate = function (models) {
    models.User.hasOne(models.Skill);
    models.User.hasMany(models.Favorite);
  };

  // Create custom method for User model. This will compares unhashed password entered by user to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};