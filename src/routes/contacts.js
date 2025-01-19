const express = require('express');
const contactsController = require('../controllers/contacts');

const router = express.Router();

// List all contacts
router.get('/', contactsController.listAllContacts);

// Find contact by ID using query parameter
router.get('/single', contactsController.findContactByID);

module.exports = router;