import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5500/api',  // Ensure backend server is running
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

// Courses API
export const createCourse = (courseData) => API.post('/courses', courseData);
export const updateCourse = (courseId, courseData) => API.put(`/courses/${courseId}`, courseData);
export const deleteCourse = (courseId) => API.delete(`/courses/${courseId}`);

// Assignments API
export const gradeAssignment = (assignmentId, grade) => API.post(`/assignments/grade/${assignmentId}`, { grade });

// Student API
export const getStudentProfile = () => API.get('/students/profile');

// Notifications API
export const getNotifications = () => API.get('/notifications');
export const createNotification = (notificationData) => API.post('/notifications', notificationData);

export default API;
