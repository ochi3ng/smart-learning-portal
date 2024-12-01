import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div>
                <Link to="/" className="text-lg font-bold hover:underline">
                    Smart Learning Portal
                </Link>
            </div>
            <div>
                <Link to="/" className="mx-2 hover:underline">
                    Home
                </Link>
                <Link to="/courses" className="mx-2 hover:underline">
                    Courses
                </Link>
                <Link to="/login" className="mx-2 hover:underline">
                    Login
                </Link>
                <Link to="/register" className="mx-2 hover:underline">
                    Register
                </Link>
                <button
                    onClick={handleLogout}
                    className="mx-2 bg-red-500 px-3 py-1 rounded-md hover:bg-red-700"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

