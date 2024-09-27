const express = require('express');
const { getStudentProfile } = require('../controllers/studentController');
const { protect, studentOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', protect, studentOnly, getStudentProfile);

module.exports = router;
