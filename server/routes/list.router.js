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
            console.log('Database query error', error);
            res.sendStatus(500);
            
        })
    
})


module.exports = router;