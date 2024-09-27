const express = require('express');
const { submitAssignment, gradeAssignment, getCourseAssignments, getStudentAssignments } = require('../controllers/assignmentController');
const { protect, teacherOnly, studentOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/submit', protect, studentOnly, submitAssignment);  // Student submits assignment
router.post('/grade', protect, teacherOnly, gradeAssignment);  // Teacher grades assignment
router.get('/course/:courseId', protect, teacherOnly, getCourseAssignments);  // Teacher views all assignments for a course
router.get('/student', protect, studentOnly, getStudentAssignments);  // Student views their assignments

module.exports = router;
