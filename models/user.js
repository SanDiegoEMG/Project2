module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    app_type: DataTypes.STRING,
    coding_time: DataTypes.INTEGER,
    concept: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    profile: DataTypes.TEXT
  });
  User.associate = function(models) {
    models.User.hasMany(models.Skill);
}
  return User;
};