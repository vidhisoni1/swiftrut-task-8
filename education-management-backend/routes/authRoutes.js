const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Ensure proper import

const router = express.Router();

router.post('/register', registerUser);  // Make sure registerUser is defined
router.post('/login', loginUser);        // Make sure loginUser is defined

module.exports = router;
