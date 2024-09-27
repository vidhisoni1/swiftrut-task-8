const Assignment = require('../models/Assignment');
const Course = require('../models/Course');

// Submit assignment (Student action)
exports.submitAssignment = async (req, res) => {
    const { courseId, title, submissionDate, fileUrl } = req.body;
    const studentId = req.user._id;

    try {
        const course = await Course.findById(courseId);
        if (!course || !course.students.includes(studentId)) {
            return res.status(400).json({ message: 'You are not enrolled in this course' });
        }

        const assignment = await Assignment.create({ course: courseId, student: studentId, title, submissionDate, fileUrl });
        res.status(201).json(assignment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Grade assignment (Teacher action)
exports.gradeAssignment = async (req, res) => {
    const { assignmentId, grade } = req.body;

    try {
        const assignment = await Assignment.findById(assignmentId);
        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }

        assignment.grade = grade;
        await assignment.save();

        res.status(200).json({ message: 'Assignment graded successfully', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get assignments for a course (Teacher action)
exports.getCourseAssignments = async (req, res) => {
    const { courseId } = req.params;

    try {
        const assignments = await Assignment.find({ course: courseId }).populate('student', 'name email');
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get assignments for a student (Student action)
exports.getStudentAssignments = async (req, res) => {
    const studentId = req.user._id;

    try {
        const assignments = await Assignment.find({ student: studentId });
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
