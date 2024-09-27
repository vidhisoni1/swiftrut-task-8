const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    submissionDate: { type: Date, required: true },
    grade: { type: Number, default: null },  // Teachers can assign grades later
    fileUrl: { type: String, required: true }  // URL for uploaded file
});

module.exports = mongoose.model('Assignment', assignmentSchema);
