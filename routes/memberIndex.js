const express = require('express');
const router = express.Router();
const memberIndexController = require('../controllers/memberIndexController');


// Route for fetching page

router.get('/', memberIndexController.getIndexPage)
module.exports = router