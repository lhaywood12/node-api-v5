const express = require('express')
const router = express.Router()

router.use('/film', require('../api/filmRoutes'))

router.use('/actor', require('./api/actorRoutes'))

router.use('/country', require('../api/country'))

module.exports = router