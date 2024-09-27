const Student = require('../models/Student');
const Assignment = require('../models/Assignment');

// Get student's profile including courses and grades
exports.getStudentProfile = async (req, res) => {
    const studentId = req.user._id;
    try {
        const student = await Student.findById(studentId).populate('courses', 'title startDate endDate');
        const assignments = await Assignment.find({ student: studentId });
        const grades = assignments.map(assignment => ({
            courseName: assignment.course.title,
            grade: assignment.grade
        }));
        res.status(200).json({ student, grades });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
