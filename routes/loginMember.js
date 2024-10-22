const express = require('express');
const router = express.Router();
const loginMemberController = require('../controllers/loginMemberController');

// Route for fetching all contact submissions
router.get('/', loginMemberController.getCreatePage);

router.post('/', loginMemberController.login_post)

router.get('/', loginMemberController.login_get)

module.exports = router;
