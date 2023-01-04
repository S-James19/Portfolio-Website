// Script uses code referenced from - https://www.youtube.com/watch?v=LVfH5FDOa3o

// access modules
const express = require('express');
const path = require('path');
const apiRouter = require('./router');
const parser = require('body-parser');

// access .env file storing username and password for mysql
// Code from - https://stackoverflow.com/questions/69259896/set-environment-variables-outside-of-pages-dir-in-nextjs
require('dotenv').config({path: path.resolve(__dirname, "../private/.env")});

// create application
const application = express();

//apply modules to application use
application.use(express.json());
application.use(express.urlencoded({ extended: true}));

application.use(parser.urlencoded({extended: true}));
application.use(parser.json());

application.use(express.static(path.resolve(__dirname, "../public")));
application.use(apiRouter);

//set up view engine for rendering dynamic html content e.g. cards on projects.html
application.set("view engine", "ejs");
application.set("views", path.resolve(__dirname, "../public/html/views")); // where .ejs files will be stored for rendering 

//open port for outside connection
application.listen(process.env.ACCESS_PORT, () => {
    console.log("server is running on port" + process.env.ACCESS_PORT);
})