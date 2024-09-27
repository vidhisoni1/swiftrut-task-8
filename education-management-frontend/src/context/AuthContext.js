import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Fetch user details if token is available
    useEffect(() => {
        if (token) {
            axios.get('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
                .then(res => setUser(res.data))
                .catch(() => logout());
        }
    }, [token]);

    // Login
    const login = async (email, password) => {
        const res = await axios.post('/api/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        setToken(res.data.token);
        setUser({ role: res.data.role });
    };

    // Logout
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
