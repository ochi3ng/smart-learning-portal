import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import apiClient from '../api/axios';

const Register = () => {
    const [formData, setFormData] = useState({ email: '', name: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('register/', formData);
            setMessage("Registration successful! Redirecting to login...");
            setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
        } catch (error) {
            setMessage(error.response?.data?.message || "An error occurred.");
        }
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Register Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full mb-3 p-2 border rounded"
                />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full mb-3 p-2 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full mb-3 p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
            {message && <p className="mt-3 text-green-500">{message}</p>}
            <div className="mt-4">
                <p className="text-gray-600">
                    Already have an account?{' '}
                    <button
                        onClick={handleNavigateToLogin}
                        className="text-blue-500 hover:underline"
                    >
                        Log in here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
