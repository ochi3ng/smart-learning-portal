import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const fetchCourses = async () => {
    const response = await axios.get(`${API_URL}/courses/`);
    return response.data;
};

export const fetchLessons = async (courseId) => {
    const response = await axios.get(`${API_URL}/courses/${courseId}/lessons/`);
    return response.data;
};
