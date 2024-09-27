import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import AssignmentList from './AssignmentList';

const StudentDashboard = () => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4">Student Dashboard</Typography>
            </Box>
            <Grid container spacing={3}>
                <AssignmentList />
            </Grid>
        </Container>
    );
};

export default StudentDashboard;
