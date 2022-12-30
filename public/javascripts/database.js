// https://www.w3schools.com/nodejs/nodejs_mysql.asp

// import necessary packages for database connection
const mysql = require('mysql2');
const path = require('path');

// access .env file storing username and password for mysql
require('dotenv').config({path: path.resolve(__dirname, "../../private/.env")});

// create connection with mysql
const connection = mysql.createConnection(
    {
        host:'localhost',
        user: process.env.USER_NAME,
        password: process.env.USER_PASSWORD,
        database: "cards"
    }
);

// connect to mysql server
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM Projects", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
});