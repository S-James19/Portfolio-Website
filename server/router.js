//code https://www.youtube.com/watch?v=LVfH5FDOa3o

// access required modules
const express = require('express');
const database = require('./database.js');
const path = require('path');

// create router
const router = express.Router();

// public filepath for reuse
const pub = path.resolve(__dirname, "../public/");

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

//return about.html
router.get('/about.html', (req, res) => {
    res.sendFile(path.join(pub, "html/about.html"));
});

//return contact.html
router.get('/contact.html', (req, res) => {
    res.sendFile(path.join(pub, "html/contact.html"));
});

//export module
module.exports = router;