module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
      userName: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
        }
    }
    // ,
    //   score: DataTypes.INTEGER,
    //   matchName: {
    //     type: DataTypes.STRING,
    //     validate: {
    //         len: [1]
    //     }
    // },
    //   matchScore: DataTypes.INTEGER,
    });
    return Favorite;
  };


  