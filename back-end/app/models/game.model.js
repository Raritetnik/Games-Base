module.exports = (connex, Sequelize) => {
    const Product = connex.define('games', {
        title: {
            type: Sequelize.STRING(20)
        },
        thumbnail: {
            type: Sequelize.STRING(250)
        },
        short_description: {
            type: Sequelize.TEXT
        },
        genre: {
            type: Sequelize.STRING(250)
        },
        game_url: {
            type: Sequelize.STRING(250)
        },
        platform: {
            type: Sequelize.STRING(40)
        },
        developer: {
            type: Sequelize.STRING(100)
        },
        publisher: {
            type: Sequelize.STRING(100)
        },
        release_date: {
            type: Sequelize.DATE
        },
    })
    return Product
}