module.exports = function(sequelize, DataTypes) {
    var Matches = sequelize.define("Match", {
      username: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
        }
    },
      score: DataTypes.INTEGER,
      match_name: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
        }
    },
      match_score: DataTypes.INTEGER,
    });
    return Matches;
  };

  // second table that will be related one to many from the user table ... so one user will have lots of matches
  