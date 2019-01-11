module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
      userName: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
        }
    }
    });
    Favorite.associate = function (models) {
        models.Favorite.belongsTo(models.User, {
            onDelete: "CASCADE"
        });
    };
    return Favorite;
  };


  