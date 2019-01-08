module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("User", {
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
        username: {
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
    });
    return Users;
};
