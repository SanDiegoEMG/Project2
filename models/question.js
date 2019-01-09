module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        appType: DataTypes.STRING,
        codingTime: DataTypes.INTEGER,
        concept: DataTypes.STRING,
        github: DataTypes.STRING,
        linkedin: DataTypes.STRING,
        profile: DataTypes.TEXT,
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
    Question.associate = function (models) {
        models.Question.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Question;
};