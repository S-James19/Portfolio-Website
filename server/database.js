// import necessary packages for database connection
const mysql = require('mysql2');
const path = require('path');

// access .env file storing username and password for mysql
// https://stackoverflow.com/questions/69259896/set-environment-variables-outside-of-pages-dir-in-nextjs
require('dotenv').config({path: path.resolve(__dirname, "../private/.env")});

//Database connection & query format source code from https://www.youtube.com/watch?v=LVfH5FDOa3o

// create connection pool for connecting to database
const connectionPool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.USER_PASSWORD,
    user: process.env.USER_NAME,
    database: process.env.DATABASE_NAME,
    host: 'localhost',
    port: '3306'
})

let projectsDB = {};

// query: get all records from projects database
projectsDB.all = () => {
    return new Promise((resolve, rejects) => {
        connectionPool.query("SELECT * FROM PROJECTS", (err, res) => { // create connection, ask query
            if(err) return rejects(err); // if error stop executing code
            return resolve(res); // else return query results
        });
    })
}

// query: get three random records from projects database
projectsDB.random_three = () => {
    return new Promise((resolve, rejects) => {
        connectionPool.query("SELECT * FROM PROJECTS order by rand() limit 3", (err, res) => { // create connection, ask query
            if(err) return rejects(err); // if error stop executing code
            return resolve(res); // else return query results

        });
    })
}

//query: append views field in projects database, how many views projects pages have had from users
projectsDB.updateViewers = (id) => {
    return new Promise((resolve, rejects) => {
        let viewersQuery = `UPDATE projects SET ProjectViews = ProjectViews + 1 WHERE ProjectID = ${id}`; // the query to ask
        connectionPool.query(viewersQuery, (err, res) => { // create connection, ask query
            if(err) return rejects(err); // if error stop executing code
            return
        });
    })
}

//export for use in other scripts
module.exports = projectsDB;