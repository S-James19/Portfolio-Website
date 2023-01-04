//code https://www.youtube.com/watch?v=LVfH5FDOa3o

// access required modules
const express = require('express');
const database = require('./database');
const path = require('path');
const mailer = require('./mail');
const mail = require('./mail');

// private .env file path
require('dotenv').config({path: path.resolve(__dirname, "../private/.env")});

// create router
const router = express.Router();

// public filepath for reuse
const pub = path.resolve(__dirname, "../public/");


// ---------- RETURNING WEBPAGES ---------- //

// return index.html
router.get('/index.html', async (req, res, nest) => {
    DyanmicRenderingCards(req, res, nest, database.random_three, "index");
})

// return projects.html
router.get('/projects.html', async (req, res, nest) => {

    DyanmicRenderingCards(req, res, nest, database.all, "projects");
})

async function DyanmicRenderingCards(req, res, nest, func, filename) 
{
    try {
        let results = await func(); // get database records
        let resultsJSON = JSON.parse(JSON.stringify(results)); // parse to JSON format
        res.render(filename, {data: resultsJSON}); // render dynamic content and return to user
        
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

//return about.html
router.get('/about.html', (req, res) => {
    res.sendFile(path.join(pub, "html/about.html"));
});

//return contact.html
router.get('/contact.html', (req, res) => {
    res.sendFile(path.join(pub, "html/contact.html"));
});

//funcrion to dynamically render html pages with cards
// ---------- INDIVIDUAL PROJECTS ---------- //

// return portfolio 
router.get('/portfolio.html', (req, res) => {
    ReturnProject(req, res, 1, "html/projects/portfolio.html");
});

// return portfolio 
router.get('/infinite-insect-runner.html', (req, res) => {
    ReturnProject(req, res, 1, "html/projects/infinite-insect-runner.html");
});

// return operation extermination
router.get('/operation-extermination.html', (req, res) => {
    ReturnProject(req, res, 1, "html/projects/operation-extermination.html");
});

// function to return the page of a project requested by the user
function ReturnProject(req, res, id, filepath) {
    try {
        database.updateViewers(id); // get all records in database
        res.sendFile(path.join(pub, filepath));
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

// ---------- MAIL SERVER ----------- //

//send email using data from contact form

router.post('/sendemail', async (req, res) => {
    try {
        await mail.SendEmail(req, res);  // to see if email was successfully sent
        res.sendFile(path.join(pub, "html/contact.html")); // to send user back file
    }
    catch(err) { // email did not send
        console.log(err);
        res.sendStatus(500);
    }

});

//export module
module.exports = router;