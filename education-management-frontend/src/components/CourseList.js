import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const CourseList = () => {
    const courses = [
        { title: 'Math 101', description: 'Basic Mathematics', startDate: '2024-01-10', endDate: '2024-06-30' },
        { title: 'Science 101', description: 'Introduction to Science', startDate: '2024-01-10', endDate: '2024-06-30' }
    ];

    return (
        <>
            {courses.map((course, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{course.title}</Typography>
                            <Typography variant="body2">{course.description}</Typography>
                            <Typography variant="caption">
                                {course.startDate} - {course.endDate}
                            </Typography>
                            <Box mt={2}>
                                <Button variant="contained" color="primary">Edit Course</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

export default CourseList;
