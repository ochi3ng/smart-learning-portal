import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../authApi';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        logoutUser();
        localStorage.removeItem('user');
        navigate('/login');
    }, [navigate]);

    return null;
};

export default Logout;
