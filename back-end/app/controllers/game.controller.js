const db = require('../models')
const Game = db.games

exports.myFindAll = (req, res) => {
    Game.findAll()
    Game.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not find the table'
        })
    })
}

exports.myFindOne = (req, res) => {
    const id = req.params.id
    Game.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not find the data'
        })
    })
}

exports.myCreate = (req, res) => {
    console.log(req.body)
    if(!req.body.title) {
        res.status(400).send({
            message: 'The name is mandatory'
        })
        return;
    }

    Game.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not insert the data'
            })
        })
}

exports.myDestroy = (req, res) => {
    const id = req.params.id
    Game.destroy({ where: {id : id}})
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'game was deleted'
            })
        }else {
            res.send({
                message: 'game was not deleted'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not delete the data'
        })
    })
}

exports.myUpdate = (req, res) => {
    const id = req.params.id
    Game.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'game was updated'
            })
        }else {
            res.send({
                message: 'game was not updated'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not update the data'
        })
    })

}