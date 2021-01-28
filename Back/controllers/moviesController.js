const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId


var { Movies } = require('../models/movieModel')


router.get('/list', (req, res) => {
    Movies.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all movies : ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/add', (req, res) => {
    var newRecord = new Movies({
        id: req.body.id,
        name: req.body.name,
        year: req.body.year,
        desc: req.body.desc
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new movie : ' + JSON.stringify(err, undefined, 2))
    })
})

router.put('/update/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No movie with given id : ' + req.params.id)

    var updatedRecord = {
        id: req.body.id,
        name: req.body.name,
        year: req.body.year,
        desc: req.body.desc
}

    Movies.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while updating a movie : ' + JSON.stringify(err, undefined, 2))
    })
})

router.delete('/delete/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No movie with given id : ' + req.params.id)

    Movies.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a movie : ' + JSON.stringify(err, undefined, 2))
    })
})


module.exports = router