import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SubjectWiseMark from './SubjectWiseMark';

const Course = () => {
    const data = useLoaderData();
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedTeacher, setSelectedTeacher] = useState({});
    const [showMarks, setShowMarks] = useState(false);

    const handleButton = (course) => {
        setSelectedCourse(course);
        setShowMarks(true);
    }

    const handleBackButton = () => {
        setSelectedCourse(null);
        setShowMarks(false);
    }

    const handleTeacherSelect = (course, teacher) => {
        // Check if the selected teacher already has 4 subjects assigned
        if (countSubjectsForTeacher(teacher) < 4) {
            setSelectedTeacher({ ...selectedTeacher, [course]: teacher });
        } else {
            alert("This teacher already has 4 subjects assigned.");
        }
    }

    const countSubjectsForTeacher = (teacher) => {
        // Count the number of subjects assigned to the given teacher
        let count = 0;
        for (const key in selectedTeacher) {
            if (selectedTeacher.hasOwnProperty(key) && selectedTeacher[key] === teacher) {
                count++;
            }
        }
        return count;
    }

    const renderCourseButtons = () => {
        const courses = [
            "Operating Systems",
            "Software Engineering",
            "Computer Networks",
            "Algorithm Design",
            "Database Systems",
            "Software Development",
            "Advanced Computer Networks",
            "Advanced Algorithm Design",
            "Advanced Database Systems",
            "Advanced Operating Systems",
            "Advanced Software Development"
        ];

        return courses.map(course => (
            <div key={course} className="mb-4">
                <button onClick={() => handleButton(course)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{course}</button>
                <select onChange={(e) => handleTeacherSelect(course, e.target.value)} className='bg-gray-200 text-gray-700 py-2 px-4 rounded ml-4'>
                    <option value="">Select Teacher</option>
                    <option value="Khalid Saifullah">Khalid Saifullah</option>
                    <option value="Anite Halim Sagor">Anite Halim Sagor</option>
                    <option value="Mehedi Hasan Munnah">Mehedi Hasan Munnah</option>
                </select>
            </div>
        ));
    }

    return (
        <div className="container mx-auto">
            {!showMarks && (
                <>
                    <h1 className='bg-blue-400 text-white font-bold py-2 px-4 mb-4 text-xl'>Courses Details</h1>
                    <div className='grid grid-cols-1  text-left p-4'>
                        {renderCourseButtons()}
                    </div>
                </>
            )}

            {showMarks && selectedCourse && (
                <SubjectWiseMark data={data} selectedCourse={selectedCourse} selectedTeacher={selectedTeacher[selectedCourse]} />
            )}

            {showMarks && (
                <button onClick={handleBackButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Back</button>
            )}
        </div>
    );
};

export default Course;