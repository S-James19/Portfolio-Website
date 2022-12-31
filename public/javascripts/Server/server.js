// code from - https://www.youtube.com/watch?v=LVfH5FDOa3o

// access modules
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/router.js');

// access .env file storing username and password for mysql
// https://stackoverflow.com/questions/69259896/set-environment-variables-outside-of-pages-dir-in-nextjs
require('dotenv').config({path: path.resolve(__dirname, "../../../private/.env")});

// create application
const application = express();

application.use(express.json());
application.use('/api/chirps' ,apiRouter);

application.listen(process.env.ACCESS_PORT, () => {
    console.log("server is running on port" + process.env.ACCESS_PORT);
})