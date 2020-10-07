module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Jokes', {
        jokes: {
            type: DataTypes.STRING(255)
        },
        like: {
            type: DataTypes.BOOLEAN
        },
        dislike: {
            type: DataTypes.BOOLEAN
        }

    });

    model.associate = models => {
        model.belongsTo(models.Users, { foreignKey : 'user_id'})
    }

    return model
}