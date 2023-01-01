//code https://www.youtube.com/watch?v=LVfH5FDOa3o

// access required modules
const express = require('express');
const database = require('./database');
const path = require('path');
const { json } = require('express');
const fs = require('fs');
const { stringify } = require('querystring');

// create router
const router = express.Router();

// public filepath for reuse
const pub = path.resolve(__dirname, "../public/");

// return index.html
router.get('/index.html', async (req, res, nest) => {
    try {
        let results = await database.random_three();
        let resultsJSON = JSON.parse(JSON.stringify(results));
        res.render("index", {data: resultsJSON});
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

// return projects.html
router.get('/projects.html', async (req, res, nest) => {
    try {
        let results = await database.all(); // get all records in database
        let resultsJSON = JSON.parse(JSON.stringify(results));
        res.render("projects", {data: resultsJSON});
        
    }
    catch(err) {
        console.log(err);
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

// ---------- INDIVIDUAL PROJECTS ---------- //

// return portfolio 
router.get('/portfolio.html', (req, res) => {
    try {
        database.updateViewers(3); // get all records in database
        res.sendFile(path.join(pub, "html/projects/portfolio.html"));
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

// return insect runner
router.get('/infinite-insect-runner.html', (req, res) => {
    res.sendFile(path.join(pub, "html/projects/infinite-insect-runner.html"));
});

// return operation extermination
router.get('/operation-extermination.html', (req, res) => {
    res.sendFile(path.join(pub, "html/projects/operation-extermination.html"));
});


//export module
module.exports = router;