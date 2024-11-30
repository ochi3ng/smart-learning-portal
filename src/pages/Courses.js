import React from "react";
import { useQuery } from "react-query";
import { fetchCourses } from "../services/apiService";
import { Link } from "react-router-dom";

const Courses = () => {
    const { data, error, isLoading, isError } = useQuery("courses", fetchCourses);

    if (isLoading) return <div className="text-center">Loading...</div>;
    if (isError) return <div className="text-center text-red-500">{error.message}</div>;

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Available Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((course) => (
                    <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">{course.name}</h3>
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        <Link
                            to={`/courses/${course.id}`}
                            className="w-full bg-blue-500 text-white py-2 rounded-md text-center hover:bg-blue-600"
                        >
                            View Course
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
