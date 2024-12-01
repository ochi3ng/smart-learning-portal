import React from "react";

const courses = [
    {
        id: 1,
        title: "Learn React",
        description: "Understand React fundamentals and build interactive applications.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWN0fGVufDB8fHx8MTYwOTQ4ODg5Mg&ixlib=rb-1.2.1&q=80&w=400",
        duration: "6 hours",
    },
    {
        id: 2,
        title: "Master CSS with Tailwind",
        description: "Learn utility-first styling with Tailwind CSS.",
        image: "https://cdn01.alison-static.net/courses/4882/alison_courseware_intro_4882.jpg",
        duration: "4 hours",
    },
    {
        id: 3,
        title: "JavaScript Basics",
        description: "Get a strong foundation in JavaScript.",
        image: "https://static.wixstatic.com/media/7e2e5288292845cfa99ab67a010c3e15.png/v1/crop/x_36,y_0,w_729,h_800/fill/w_410,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman%20Studying%20.png",
        duration: "8 hours",
    },
    {
        id: 4,
        title: "Python for Beginners",
        description: "Learn the basics of Python programming language.",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/fe/7320a26ec945e6ae1a3251d38d43b2/front-end-dev1.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&q=50&fit=crop",
        duration: "5 hours",
    },
    {
        id: 5,
        title: "Full-Stack Development",
        description: "Become proficient in both frontend and backend development.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWN0fGVufDB8fHx8MTYwOTQ4ODg5Mg&ixlib=rb-1.2.1&q=80&w=400",
        duration: "10 hours",
    },
    {
        id: 6,
        title: "Data Analysis with Python",
        description: "Analyze data and gain insights using Python libraries.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRhdGF8ZW58MHx8fHwxNjA5NDg5MTcz&ixlib=rb-1.2.1&q=80&w=400",
        duration: "7 hours",
    },
    {
        id: 7,
        title: "Cloud Computing Basics",
        description: "Understand the fundamentals of cloud computing and its services.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNsb3VkfGVufDB8fHx8MTYwOTQ4OTIwMw&ixlib=rb-1.2.1&q=80&w=400",
        duration: "6 hours",
    },
    {
        id: 8,
        title: "Machine Learning Basics",
        description: "Learn the core concepts of machine learning and its applications.",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1hY2hpbmUgbGVhcm5pbmd8ZW58MHx8fHwxNjA5NDg5MjU1&ixlib=rb-1.2.1&q=80&w=400",
        duration: "8 hours",
    },
    {
        id: 9,
        title: "Learn React",
        description: "Understand React fundamentals and build interactive applications.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWN0fGVufDB8fHx8MTYwOTQ4ODg5Mg&ixlib=rb-1.2.1&q=80&w=400",
        duration: "6 hours",
    },
];


const Courses = () => {
    return (
        <div className="container mx-auto py-10 px-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-bold">{course.title}</h2>
                        <p className="text-gray-600">{course.description}</p>
                        <p className="mt-2 text-sm text-gray-500">Duration: {course.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;