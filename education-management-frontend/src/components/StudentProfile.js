import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import API from '../services/api';

const StudentProfile = () => {
    const [profile, setProfile] = useState(null);
    const [courses, setCourses] = useState([]);
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            const { data } = await API.get('/students/profile');
            setProfile(data);
            setCourses(data.courses);
            setGrades(data.grades);
        };
        fetchProfile();
    }, []);

    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4">Student Profile</Typography>
                {profile && (
                    <>
                        <Typography variant="h6">Name: {profile.name}</Typography>
                        <Typography variant="h6">Email: {profile.email}</Typography>
                    </>
                )}

                <Box mt={4}>
                    <Typography variant="h5">Enrolled Courses</Typography>
                    <Grid container spacing={3}>
                        {courses.map((course) => (
                            <Grid item xs={12} md={6} key={course._id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">{course.title}</Typography>
                                        <Typography variant="body2">
                                            {course.startDate} - {course.endDate}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box mt={4}>
                    <Typography variant="h5">Grades</Typography>
                    <Grid container spacing={3}>
                        {grades.map((grade) => (
                            <Grid item xs={12} md={6} key={grade.courseId}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">Course: {grade.courseName}</Typography>
                                        <Typography variant="body2">Grade: {grade.grade}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default StudentProfile;
