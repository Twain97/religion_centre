const express = require('express');
const router = express.Router();
const signUpMemberController = require('../controllers/signUpMemberController');


// Route for fetching all contact submissions
router.get('/', signUpMemberController.getCreatePage);

router.post('/', signUpMemberController.signup_post)

module.exports = router