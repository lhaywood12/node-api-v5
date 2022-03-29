const res = require('express/lib/response')
const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const actorDao = {
    ...daoCommon,

    create: (req, res)=> {
        con.query(
            'INSERT INTO actor SET?',
            req.body,
            (error, dbres)=> {
                if(!error) {
                    res.send(`Last id: ${dnres.insert.Id}`)
                } else {
                    console.log(' DAO ERROR', error)
                    res.send(' Error creating record')
                }
            }
        )
    },

update: (req, res)=> {
    con.query('UPDATE actor SET first_name = ?,last_name = ? WHERE actor_id = ?',[req.bost.first.name, req.body.last_name, req.actor_id],
    (error, dbres)=> {
        if(!error) {
            res.send(`Changed ${dbres.changeRows} row(s)`)
        } else {
            console.log('DAO ERROR', error)
            res.send('Error updating record')
        }
      }
    )
  }
}

module.exports = actorDao