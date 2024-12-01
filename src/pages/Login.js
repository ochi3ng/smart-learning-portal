import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import api from "../api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: async (data) => {
            const response = await api.post("/login/", data);
            return response.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            navigate("/");
        },
        onError: (error) => {
            alert(error.response?.data?.message || "Login failed");
        },
    });

    const handleLogin = (e) => {
        e.preventDefault();
        loginMutation.mutate({ email, password });
    };

    const handleRegisterRedirect = () => {
        navigate("/register");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 shadow-md rounded-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4">Login</h2>
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
                    className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
                >
                    Login
                </button>

                <div className="text-center">
                    <p className="text-sm">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={handleRegisterRedirect}
                            className="text-blue-600 hover:underline"
                        >
                            Register
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
