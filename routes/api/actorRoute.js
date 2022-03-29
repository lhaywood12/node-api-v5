const express = require('express')
const router = express.Router()

const dao = require('../..dao/api/actorDao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'actor')
})

router.get('/:id', (req, res)=> {
    dao.find(res, 'actor', req.params.id)
})

router.past('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router