// https://www.w3schools.com/nodejs/nodejs_mysql.asp

// import necessary packages for database connection
const mysql = require('mysql2');

// create connection with mysql
const connection = mysql.createConnection(
    {
        host:'localhost',
        user: "user",
        password: "password"
    }
);

// connect to mysql server
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected");
});