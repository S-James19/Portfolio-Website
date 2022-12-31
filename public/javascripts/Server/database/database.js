
// import necessary packages for database connection
const mysql = require('mysql2');
const path = require('path');

// access .env file storing username and password for mysql
// https://stackoverflow.com/questions/69259896/set-environment-variables-outside-of-pages-dir-in-nextjs
require('dotenv').config({path: path.resolve(__dirname, "../../private/.env")});

// https://www.w3schools.com/nodejs/nodejs_mysql.asp

// create connection with mysql
const connection = mysql.createConnection(
    {
        host:'localhost',
        user: process.env.USER_NAME,
        password: process.env.USER_PASSWORD,
        database: "cards"
    }
);

// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp

// connect to mysql server
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM Projects", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
});