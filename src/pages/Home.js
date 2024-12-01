import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.jpg?s=1024x1024&w=is&k=20&c=5qZbetrhWMCdOiptNJCwzTWl2Npm1Cd4lvg848EDNbQ=')",
            }}
        >
            <div className="text-center bg-white bg-opacity-80 p-6 rounded-md shadow-md">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">
                    Welcome to Smart Learning Portal
                </h1>
                <p className="text-lg mb-6 text-gray-700">
                    Explore courses and enhance your skills
                </p>
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
