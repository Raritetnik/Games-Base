module.exports = (connex, Sequelize) => {
    const Game = connex.define('games', {
        title: {
            type: Sequelize.STRING(50)
        },
        thumbnail: {
            type: Sequelize.STRING(250)
        },
        description: {
            type: Sequelize.TEXT
        },
        price: {
            type: Sequelize.DOUBLE
        },
        category: {
            type: Sequelize.STRING(50)
        },
    })
    return Game
}