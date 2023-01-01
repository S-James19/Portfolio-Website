//code https://www.youtube.com/watch?v=LVfH5FDOa3o

// access required modules
const express = require('express');
const database = require('./database');
const path = require('path');
const { json } = require('express');
const fs = require('fs');
const { stringify } = require('querystring');
const mailer = require('nodemailer');

// private .env file path
require('dotenv').config({path: path.resolve(__dirname, "../private/.env")});

// create router
const router = express.Router();

// public filepath for reuse
const pub = path.resolve(__dirname, "../public/");


// ---------- RETURNING WEBPAGES ---------- //

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

// return portfolio 
router.get('/infinite-insect-runner.html', (req, res) => {
    try {
        database.updateViewers(2); // get all records in database
        res.sendFile(path.join(pub, "html/projects/infinite-insect-runner.html"));
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

// return operation extermination
router.get('/operation-extermination.html', (req, res) => {
    try {
        database.updateViewers(1); // get all records in database
        res.sendFile(path.join(pub, "html/projects/operation-extermination.html"));
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

// ---------- MAIL SERVER ----------- //

//send email using data from contact form
// code reference: https://www.youtube.com/watch?v=30VeUWxZjS8&t=277s
router.post('/sendemail', (req, res) => {

    const transporter = mailer.createTransport( {
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: req.body.Email,
        to: process.env.USER_EMAIL,
        subject: `Message from: ${req.body.Name}: ${req.body.Email}`,
        text: req.body.Message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('error');
        }
        else {
            console.log(req.body);
            res.send('success');
        }
    });
});


//export module
module.exports = router;