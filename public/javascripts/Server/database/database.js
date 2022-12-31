
// import necessary packages for database connection
const mysql = require('mysql2');
const path = require('path');

// access .env file storing username and password for mysql
// https://stackoverflow.com/questions/69259896/set-environment-variables-outside-of-pages-dir-in-nextjs
require('dotenv').config({path: path.resolve(__dirname, "../../../../private/.env")});

//code from https://www.youtube.com/watch?v=LVfH5FDOa3o

// create connection pool for connecting to database
const connectionPool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.USER_PASSWORD,
    user: process.env.USER_NAME,
    database: 'cards',
    host: 'localhost',
    port: '3306'
})

let projectsDB = {};

projectsDB.all = () => {
    return new Promise((resolve, rejects) => {
        connectionPool.query("SELECT * FROM PROJECTS", (err, res) => {
            if(err) return rejects(err); // if error stop executing code
            return resolve(res); // else return query results

        });
    })
}

module.exports = projectsDB;