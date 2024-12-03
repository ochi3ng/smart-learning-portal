import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            const response = await apiClient.post('login/', formData);
            const { token } = response.data; // Assuming the backend sends a token
            localStorage.setItem('authToken', token); // Save the token for future requests
            navigate('/dashboard'); // Redirect to the dashboard or another page
        } catch (error) {
            setError(error.response?.data?.error || 'Invalid credentials'); // Display error
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
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
                    Login
                </button>
            </form>
            {error && <p className="mt-3 text-red-500">{error}</p>}
        </div>
    );
};

export default Login;
