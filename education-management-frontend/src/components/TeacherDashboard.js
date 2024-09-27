import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import AssignmentList from './AssignmentList';

const TeacherDashboard = () => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4">Teacher Dashboard</Typography>
                <Box mt={3} display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary">Upload Assignment</Button>
                </Box>
            </Box>
            <Grid container spacing={3}>
                <AssignmentList />
            </Grid>
        </Container>
    );
};

export default TeacherDashboard;
