import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import CourseForm from './components/CourseForm';
import GradeAssignment from './components/GradeAssignment';
import StudentProfile from './components/StudentProfile';
import Notifications from './components/Notifications';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute allowedRoles={['Admin']}>
                                <Layout>
                                    <AdminDashboard />
                                    <CourseForm />
                                </Layout>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/teacher"
                        element={
                            <PrivateRoute allowedRoles={['Teacher']}>
                                <Layout>
                                    <TeacherDashboard />
                                    <GradeAssignment />
                                </Layout>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/student"
                        element={
                            <PrivateRoute allowedRoles={['Student']}>
                                <Layout>
                                    <StudentDashboard />
                                    <StudentProfile />
                                    <Notifications />
                                </Layout>
                            </PrivateRoute>
                        }
                    />
                    <Route path="/" element={<LoginForm />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
