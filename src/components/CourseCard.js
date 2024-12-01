const CourseCard = ({ course }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h2 className="text-lg font-bold">{course.title}</h2>
            <p className="text-gray-700">{course.description}</p>
            <p className="text-sm text-gray-500 mt-2">Duration: {course.duration}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Enroll Now
            </button>
        </div>
    </div>
);

export default CourseCard;
