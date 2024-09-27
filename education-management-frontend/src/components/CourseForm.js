import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import API from '../services/api';

const CourseForm = ({ course, onSubmit }) => {
    const [title, setTitle] = useState(course ? course.title : '');
    const [description, setDescription] = useState(course ? course.description : '');
    const [startDate, setStartDate] = useState(course ? course.startDate : '');
    const [endDate, setEndDate] = useState(course ? course.endDate : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCourse = { title, description, startDate, endDate };
        try {
            if (course) {
                // Edit existing course
                await API.put(`/courses/${course._id}`, newCourse);
            } else {
                // Create new course
                await API.post('/courses', newCourse);
            }
            onSubmit();
        } catch (error) {
            console.error('Error saving course', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={3}>
                <Typography variant="h5">{course ? 'Edit Course' : 'Create Course'}</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Course Title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                        label="Start Date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <TextField
                        label="End Date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <Box mt={2}>
                        <Button type="submit" variant="contained" color="primary">
                            {course ? 'Update Course' : 'Create Course'}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default CourseForm;
