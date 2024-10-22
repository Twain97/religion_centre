const express = require('express');
const router = express.Router();
const membersController = require('../controllers/membersController');

// Route for fetching all members
router.get('/', membersController.getAllMembers);

// Route for fetching a single member by ID
router.get('/:id', membersController.getMemberById);

// Route for creating a new member
router.post('/', membersController.createMember);

// Route for updating a member
router.put('/:id', membersController.updateMember);

// Route for deleting a member
router.delete('/:id', membersController.deleteMember);

module.exports = router;
