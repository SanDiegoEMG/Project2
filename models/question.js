module.exports = function (sequelize, DataTypes) {
    var Skill = sequelize.define("Skill", {
        userName: DataTypes.STRING,
        appType: DataTypes.STRING,
        codingTime: DataTypes.INTEGER,
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
    Skill.associate = function (models) {
        models.Skill.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Skill;
};