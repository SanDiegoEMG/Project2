module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    email: DataTypes.STRING,
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    app_type: DataTypes.STRING,
    coding_time: DataTypes.INTEGER,
    concept: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    profile: DataTypes.TEXT
  });
  User.associate = function (models) {
    models.User.hasMany(models.Skill);
  }
  return User;
};