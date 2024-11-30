import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchLessons } from "../services/apiService";

const CourseDetails = () => {
    const { courseId } = useParams();
    const { data, error, isLoading, isError } = useQuery(
        ["lessons", courseId],
        () => fetchLessons(courseId)
    );

    if (isLoading) return <div className="text-center">Loading lessons...</div>;
    if (isError) return <div className="text-center text-red-500">{error.message}</div>;

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Lessons for this Course</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((lesson) => (
                    <div key={lesson.id} className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">{lesson.title}</h3>
                        <p className="text-gray-600 mb-4">{lesson.description}</p>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                            Start Lesson
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseDetails;
