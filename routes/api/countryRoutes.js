const express = require('express')
const router = express.Router()

const dao = require('../..dao/api/countryDao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'country')
})

router.get('/:id', (req, res)=> {
    dao.find(res, 'country', req.params.id)
})

router.past('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router