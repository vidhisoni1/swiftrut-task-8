import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import API from '../services/api';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const { data } = await API.get('/notifications');
            setNotifications(data);
        };
        fetchNotifications();
    }, []);

    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4">Notifications</Typography>
                <Grid container spacing={3}>
                    {notifications.map((notification) => (
                        <Grid item xs={12} md={6} key={notification._id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body2">{notification.message}</Typography>
                                    <Typography variant="caption">
                                        Date: {notification.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Notifications;
