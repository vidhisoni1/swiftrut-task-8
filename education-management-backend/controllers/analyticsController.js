const Course = require('../models/Course');
const Assignment = require('../models/Assignment');

// Calculate average grade for a course
exports.getCourseAverageGrade = async (req, res) => {
    const { courseId } = req.params;

    try {
        const avgGrade = await Assignment.aggregate([
            { $match: { course: courseId } },
            { $group: { _id: "$course", averageGrade: { $avg: "$grade" } } }
        ]);

        res.status(200).json({ averageGrade: avgGrade[0]?.averageGrade || 'No grades yet' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get total number of students per course
exports.getStudentCountPerCourse = async (req, res) => {
    try {
        const studentCount = await Course.aggregate([
            { $project: { title: 1, studentCount: { $size: "$students" } } }
        ]);

        res.status(200).json(studentCount);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
