module.exports = app => {
    const game = require('../controllers/game.controller.js')
    const router = require('express').Router()

    router.get('/', game.myFindAll)

    router.post('/', game.myCreate)

    router.get('/:id', game.myFindOne)

    router.delete('/:id', game.myDestroy)

    router.put('/:id', game.myUpdate)

    app.use('/api/game', router)
}