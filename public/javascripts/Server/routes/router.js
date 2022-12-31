//code https://www.youtube.com/watch?v=LVfH5FDOa3o

// access required modules
const express = require('express');

// create router
const router = express.Router();

// test for connection
router.get('/', (req, res, nest) => {
    res.json({test: 'test'});
})

//export module
module.exports = router;