import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const AssignmentList = () => {
    const assignments = [
        { title: 'Math Assignment 1', dueDate: '2024-03-15', grade: 'A' },
        { title: 'Science Assignment 1', dueDate: '2024-03-20', grade: 'B' }
    ];

    return (
        <>
            {assignments.map((assignment, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{assignment.title}</Typography>
                            <Typography variant="body2">Due: {assignment.dueDate}</Typography>
                            {assignment.grade && (
                                <Typography variant="caption">Grade: {assignment.grade}</Typography>
                            )}
                            <Box mt={2}>
                                <Button variant="contained" color="primary">Submit Assignment</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

export default AssignmentList;
