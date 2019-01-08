module.exports = function(sequelize, DataTypes) {
    var Matches = sequelize.define("Match", {
      userName: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
        }
    },
      score: DataTypes.INTEGER,
      matchName: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
        }
    },
      matchScore: DataTypes.INTEGER,
    });
    return Matches;
  };

  // second table that will be related one to many from the user table ... so one user will have lots of matches
  