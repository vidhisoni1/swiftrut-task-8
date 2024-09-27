import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Education Management System
                    </Typography>
                    {user && (
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    )}
                </Toolbar>
            </AppBar>
            <Box p={3}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
