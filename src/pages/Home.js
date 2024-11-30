import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-blue-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Smart Learning Portal</h1>
                <p className="text-lg mb-6">Explore courses and enhance your skills</p>
                <Link
                    to="/courses"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                    Browse Courses
                </Link>
            </div>
        </div>
    );
};

export default Home;
