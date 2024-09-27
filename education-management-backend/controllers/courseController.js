const Course = require('../models/Course');

// Create a new course
exports.createCourse = async (req, res) => {
    const { title, description, startDate, endDate } = req.body;
    try {
        const course = await Course.create({ title, description, startDate, endDate });
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a course
exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description, startDate, endDate } = req.body;
    try {
        const course = await Course.findByIdAndUpdate(id, { title, description, startDate, endDate }, { new: true });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        await Course.findByIdAndDelete(id);
        res.status(200).json({ message: 'Course deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
