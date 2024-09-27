import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';
import CourseList from './CourseList';

const AdminDashboard = () => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4">Admin Dashboard</Typography>
                <Box mt={3} display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary">Create New Course</Button>
                </Box>
            </Box>
            <Grid container spacing={3}>
                <CourseList />
            </Grid>
        </Container>
    );
};

export default AdminDashboard;
