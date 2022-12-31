//code https://www.youtube.com/watch?v=LVfH5FDOa3o

// access required modules
const express = require('express');
const database = require('../database/database.js');

// create router
const router = express.Router();

// test for connection
router.get('/', async (req, res, nest) => {
    try {
        let results = await database.all();
        res.json(results);
    }
    catch(err) {
        console.log("this is working");
        res.sendStatus(500);
    }
})

//export module
module.exports = router;