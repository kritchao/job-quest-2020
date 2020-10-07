module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING(30),
            unique: true
        },
        password: {
            type: DataTypes.STRING(200)
        },
    });

    model.associate = models => {
        model.hasMany(models.Jokes, { foreignKey : 'user_id'})
    }

    return model
}