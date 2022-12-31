//code https://www.youtube.com/watch?v=LVfH5FDOa3o

// access required modules
const express = require('express');
const database = require('./database.js');

// create router
const router = express.Router();

// get all records
router.get('/all', async (req, res, nest) => {
    try {
        let results = await database.all();
        res.json(results);
    }
    catch(err) {
        console.log("this is working");
        res.sendStatus(500);
    }
})

// get a random record
router.get('/rand', async (req, res, nest) => {
    try {
        let results = await database.rand();
        res.json(results);
    }
    catch(err) {
        console.log("this is working");
        res.sendStatus(500);
    }
})

//export module
module.exports = router;