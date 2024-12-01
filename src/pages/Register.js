import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import api from "../api";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const registerMutation = useMutation({
        mutationFn: async (data) => {
            const response = await api.post("/register/", data);
            return response.data;
        },
        onSuccess: () => {
            alert("Registration successful!");
            navigate("/login"); 
        },
        onError: (error) => {
            alert(error.response?.data?.message || "Registration failed");
        },
    });

    const handleRegister = (e) => {
        e.preventDefault();
        registerMutation.mutate({ email, password, name });
    };

    const handleLoginRedirect = () => {
        navigate("/login"); // Navigate to the login page
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleRegister}
                className="bg-white p-8 shadow-md rounded-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border px-4 py-2 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border px-4 py-2 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border px-4 py-2 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md w-full mb-4"
                >
                    Register
                </button>

                <div className="text-center">
                    <p className="text-sm">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={handleLoginRedirect}
                            className="text-blue-600 hover:underline"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
