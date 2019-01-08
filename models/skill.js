module.exports = function(sequelize, DataTypes) {
    var Skill = sequelize.define("Skill", {
      html: DataTypes.BOOLEAN,
      css: DataTypes.BOOLEAN,
      javascript: DataTypes.BOOLEAN,
      jquery: DataTypes.BOOLEAN,
      node: DataTypes.BOOLEAN,
      express: DataTypes.BOOLEAN,
      react: DataTypes.BOOLEAN,
      mongodb: DataTypes.BOOLEAN,
      mysql: DataTypes.BOOLEAN,
      handlebars: DataTypes.BOOLEAN,
    });
    return Skill;
  };