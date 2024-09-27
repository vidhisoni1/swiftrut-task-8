const express = require('express');
const { getCourseAverageGrade, getStudentCountPerCourse } = require('../controllers/analyticsController');
const { protect, adminOnly, teacherOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/average-grade/:courseId', protect, teacherOnly, getCourseAverageGrade);
router.get('/student-count', protect, adminOnly, getStudentCountPerCourse);

module.exports = router;
