// code from - https://www.youtube.com/watch?v=LVfH5FDOa3o

// access modules
const exp = require('constants');
const express = require('express');
const path = require('path');
const apiRouter = require('./router');

// access .env file storing username and password for mysql
// https://stackoverflow.com/questions/69259896/set-environment-variables-outside-of-pages-dir-in-nextjs
require('dotenv').config({path: path.resolve(__dirname, "../private/.env")});

// create application
const application = express();

application.use(express.json());
application.use(express.static(path.resolve(__dirname, "../public")));
application.use(apiRouter);

//set up view engine for rendering dynamic html content
application.use(express.urlencoded({ extended: false}));
application.set("view engine", "ejs");
application.set("views", path.resolve(__dirname, "../public/html/views"));

application.listen(process.env.ACCESS_PORT, () => {
    console.log("server is running on port" + process.env.ACCESS_PORT);
})