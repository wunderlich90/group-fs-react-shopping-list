const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (res, req) => {
    const sqlQuery = `SELECT * FROM "shopping_list",
                        ORDER BY "isPurchased" ASC,
                        "name" ASC;`;
    pool.query(sqlQuery)
        .then((result) => {
            console.log('Received data from DB', result);
            res.send(result.rows);   
        })
        .catch((error) => {
            console.log('GET error', error);
            res.sendStatus(500);
            
        })
    
})

router.post('/', (req, res) => {
    const sqlQuery = `INSERT INTO "shopping_list" (name, quantity, unit, isPurchased)
                        VALUES ($1, $2, $3, $4)`;

    const sqlParams = [
        req.body.name,          //$1
        req.body.quantity,      //$2
        req.body.unit,          //$3
        req.body.isPurchased    //$4
    ];

    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            console.log('Added item to the shopping list', req.body);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('POST error', error);
            res.sendStatus(500);
            
        })
    
})


module.exports = router;