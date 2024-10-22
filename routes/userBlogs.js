const express = require('express');
const router = express.Router();
const myBlogs = require('../controllers/userBlogsController');


// Route for fetching page

router.get('/', myBlogs.getIndexPage)
module.exports = router