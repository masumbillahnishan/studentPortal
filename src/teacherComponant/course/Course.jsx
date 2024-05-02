import React, { useState, useEffect } from 'react';

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('http://localhost:5000/courses');
            const data = await response.json();
            setCourses(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError('Error fetching courses. Please try again later.');
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">All Courses</h1>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && !error && (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map(course => (
                        <li key={course._id} className="bg-white shadow-md rounded-md p-4">
                            <h2 className="text-lg font-semibold">{course.course}</h2>
                            <p className="mt-2 text-gray-600">{course.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm text-gray-500">{course.instructor}</span>
                                <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update Mark</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Course;

























// import React, { useState, useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import SubjectWiseMark from './SubjectWiseMark';

// const Course = () => {
//     const data = useLoaderData();
//     const [courses, setCourses] = useState([]);
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [selectedTeacher, setSelectedTeacher] = useState({});
//     const [showMarks, setShowMarks] = useState(false);

//     useEffect(() => {
//         fetchCourses();
//     }, []);

//     const fetchCourses = async () => {
//         try {
//             const response = await fetch('/courses');
//             if (response.ok) {
//                 const coursesData = await response.json();
//                 setCourses(coursesData);
//             } else {
//                 console.error('Failed to fetch courses');
//             }
//         } catch (error) {
//             console.error('Error fetching courses:', error);
//         }
//     };

//     const handleButton = (course) => {
//         setSelectedCourse(course);
//         setShowMarks(true);
//     };

//     const handleBackButton = () => {
//         setSelectedCourse(null);
//         setShowMarks(false);
//     };

//     const handleTeacherSelect = (course, teacher) => {
//         if (countSubjectsForTeacher(teacher) < 4) {
//             setSelectedTeacher({ ...selectedTeacher, [course]: teacher });
//         } else {
//             alert("This teacher already has 4 subjects assigned.");
//         }
//     };

//     const countSubjectsForTeacher = (teacher) => {
//         let count = 0;
//         for (const key in selectedTeacher) {
//             if (selectedTeacher.hasOwnProperty(key) && selectedTeacher[key] === teacher) {
//                 count++;
//             }
//         }
//         return count;
//     };

//     return (
//         <div className="container mx-auto">
//             {!showMarks && (
//                 <>
//                     <h1 className='bg-blue-400 text-white font-bold py-2 px-4 mb-4 text-xl'>Courses Details</h1>
//                     <div className='grid grid-cols-1  text-left p-4'>
//                         {courses.map(course => (
//                             <div key={course._id} className="mb-4">
//                                 <button onClick={() => handleButton(course.course)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{course.course}</button>
//                                 <select onChange={(e) => handleTeacherSelect(course.course, e.target.value)} className='bg-gray-200 text-gray-700 py-2 px-4 rounded ml-4'>
//                                     <option value="">Select Teacher</option>
//                                     {/* You can dynamically populate teachers based on your server data */}
//                                     <option value="Teacher 1">Teacher 1</option>
//                                     <option value="Teacher 2">Teacher 2</option>
//                                     <option value="Teacher 3">Teacher 3</option>
//                                     {/* Add more options based on your server data */}
//                                 </select>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             )}

//             {showMarks && selectedCourse && (
//                 <SubjectWiseMark data={data} selectedCourse={selectedCourse} selectedTeacher={selectedTeacher[selectedCourse]} />
//             )}

//             {showMarks && (
//                 <button onClick={handleBackButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Back</button>
//             )}
//         </div>
//     );
// };

// export default Course;
