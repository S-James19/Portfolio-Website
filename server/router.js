//Script contains source code from: https://www.youtube.com/watch?v=LVfH5FDOa3o

// access required modules
const express = require('express');
const database = require('./database');
const path = require('path');
const mailer = require('./mail');
const mail = require('./mail');
const {body, validationResult} = require('express-validator');
const { json } = require('body-parser');
const { response } = require('express');

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

// function to dynamically render pages that use project cards
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

// ---------- INDIVIDUAL PROJECTS ---------- //

// return portfolio page
router.get('/portfolio.html', (req, res) => {
    ReturnProject(req, res, 1, "html/projects/portfolio.html");
});

// return insect runner page
router.get('/infinite-insect-runner.html', (req, res) => {
    ReturnProject(req, res, 1, "html/projects/infinite-insect-runner.html");
});

// return operation extermination page
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

//Boilerplate code reference: https://express-validator.github.io/docs/

//send email using data from contact form
router.post('/sendemail', [
    // validation rules for form input
    body('Title').notEmpty(),
    body('Name').notEmpty(),
    body('Email').notEmpty().isEmail(),
    body('Subject').notEmpty(),
    body('Message').notEmpty(),
], async (req, res) => {
    const errors = validationResult(req); // create object of errors in validation
    if(!errors.isEmpty()) { // check if errors
        return res.status(406).json({Message: "User validation error."}); // 
    }
    else { // no errors
        try { // attempt to send emails
            await mail.SendEmail(req, res); // attempt sending email
            return res.status(200).json({Message: "Email sent successfully."});
        }
        catch { // email failed, validation correct
            return res.status(500).json({Message: "Server error."});
        }
    }
});

//export modulee
module.exports = router;