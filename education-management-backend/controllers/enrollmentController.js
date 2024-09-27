const Course = require('../models/Course');
const User = require('../models/User');

// Enroll a student in a course (Admin or Student action)
exports.enrollStudent = async (req, res) => {
    const { courseId, studentId } = req.body;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const student = await User.findById(studentId);
        if (!student || student.role !== 'Student') {
            return res.status(400).json({ message: 'Invalid student' });
        }

        // Add student to the course if not already enrolled
        if (course.students.includes(studentId)) {
            return res.status(400).json({ message: 'Student already enrolled' });
        }

        course.students.push(studentId);
        await course.save();

        res.status(200).json({ message: 'Student enrolled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Remove a student from a course (Admin action)
exports.removeStudent = async (req, res) => {
    const { courseId, studentId } = req.body;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.students = course.students.filter(id => id.toString() !== studentId);
        await course.save();

        res.status(200).json({ message: 'Student removed from course' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all students enrolled in a course (Admin or Teacher action)
exports.getEnrolledStudents = async (req, res) => {
    const { courseId } = req.params;

    try {
        const course = await Course.findById(courseId).populate('students', 'name email');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json(course.students);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
