const express = require('express');
const { enrollStudent, removeStudent, getEnrolledStudents } = require('../controllers/enrollmentController');
const { protect, adminOnly, teacherOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/enroll', protect, adminOnly, enrollStudent);  // Admin enrolls students
router.post('/remove', protect, adminOnly, removeStudent);  // Admin removes students
router.get('/students/:courseId', protect, teacherOnly, getEnrolledStudents);  // Teacher/Admin can view enrolled students

module.exports = router;
