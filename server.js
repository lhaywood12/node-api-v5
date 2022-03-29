const express = require('express')
const server = express()
const helmet = require('helmet')
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3000

//Handle Security
server.use(helmet())
server.use(express.json())
server.use('/api', router)

//All routes 
server.get('/', (req, res) =>{
    res.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost${PORT}/api/actor`,
        'All Countries': `http://localhost:${PORT}/api/country`
    })
})


server.listen(PORT, ()=> {
    console.log(`It's the Port ${PORT} for me...`)
})