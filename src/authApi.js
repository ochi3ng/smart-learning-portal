import api from './api';

// Register User
export const registerUser = async (data) => {
    const response = await api.post('auth/register/', data);
    return response.data;
};

// Login User
export const loginUser = async (data) => {
    const response = await api.post('auth/login/', data);
    return response.data;
};

// Logout User
export const logoutUser = async () => {
    const response = await api.post('auth/logout/');
    return response.data;
};
