import React, { useState, useEffect } from 'react';

const CoursAssignToStudents = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState({});

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const studentsResponse = await fetch('http://localhost:5000/students');
                if (!studentsResponse.ok) {
                    throw new Error('Failed to fetch students');
                }
                const studentsData = await studentsResponse.json();
                const initialSelectedCourses = {};
                studentsData.forEach(student => {
                    initialSelectedCourses[student._id] = Array(6).fill('');
                });
                setSelectedCourses(initialSelectedCourses);
                setStudents(studentsData);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        const fetchCourses = async () => {
            try {
                const coursesResponse = await fetch('http://localhost:5000/courses');
                if (!coursesResponse.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const coursesData = await coursesResponse.json();
                setCourses(coursesData);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchStudents();
        fetchCourses();
    }, []);

    const handleCourseChange = async (studentId, index, courseId) => {
        setSelectedCourses(prevState => {
            const newState = { ...prevState };
            newState[studentId][index] = courseId;
            return newState;
        });

        try {
            const response = await fetch(`http://localhost:5000/students/${studentId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ courseId, index }),
            });

            if (!response.ok) {
                throw new Error('Failed to update student');
            }
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    return (
        <div className=" mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Students List</h2>
            {students.map(student => (
                <div key={student._id} className="flex mb-6">
                    <p className="text-lg font-semibold mb-2">
                        {student.studentName}  {student.studentID}
                    </p>
                    <div className="grid grid-cols-6 gap-4">
                        {Array(6).fill().map((_, index) => (
                            <select
                                key={index}
                                value={selectedCourses[student._id][index]}
                                onChange={e => handleCourseChange(student._id, index, e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select a course</option>
                                {courses.map(course => (
                                    <option key={course._id} value={course._id}>{course.course}</option>
                                ))}
                            </select>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoursAssignToStudents;
