import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import API from '../services/api';

const GradeAssignment = () => {
    const [assignments, setAssignments] = useState([]);
    const [grade, setGrade] = useState('');

    useEffect(() => {
        const fetchAssignments = async () => {
            const { data } = await API.get('/assignments');
            setAssignments(data);
        };
        fetchAssignments();
    }, []);

    const handleGradeSubmit = async (assignmentId) => {
        try {
            await API.post(`/assignments/grade/${assignmentId}`, { grade });
            setGrade('');
        } catch (error) {
            console.error('Error grading assignment', error);
        }
    };

    return (
        <Container maxWidth="lg">
            <Box mt={3}>
                <Typography variant="h4">Grade Assignments</Typography>
                <Grid container spacing={3}>
                    {assignments.map((assignment) => (
                        <Grid item xs={12} md={6} key={assignment._id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{assignment.title}</Typography>
                                    <Typography variant="body2">
                                        Submitted by: {assignment.student.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        Due Date: {assignment.dueDate}
                                    </Typography>
                                    <Box mt={2}>
                                        <TextField
                                            label="Grade"
                                            variant="outlined"
                                            fullWidth
                                            value={grade}
                                            onChange={(e) => setGrade(e.target.value)}
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleGradeSubmit(assignment._id)}
                                            sx={{ mt: 2 }}
                                        >
                                            Submit Grade
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default GradeAssignment;
