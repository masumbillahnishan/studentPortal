import React, { useState } from 'react';


const SubjectWiseMark = ({data,selectedCourse}) => {
    const selectedCourseData = data.filter(student =>
        student.results.some(result => result.subjectName === selectedCourse)
    );

    // State to store the input field values
    const [inputValues, setInputValues] = useState({});

    // Function to handle input changes
    const handleInputChange = (studentID, subject, newValue) => {
        setInputValues(prevState => ({
            ...prevState,
            [`${studentID}-${subject}`]: newValue
        }));
    };

    return (
        <div>
            <h1 className='bg-emerald-200 p-3 mb-4'>Subject wise marks for <span className='text-red-400'>{selectedCourse}</span></h1>
            <div >
                {selectedCourseData.map(student => (
                    <div className=' border border-neutral-600' key={student.studentID}>
                        <h3>{student.studentName}</h3>
                        <div className=''>
                            {student.results.map(result => {
                                if (result.subjectName === selectedCourse) {
                                    return (
                                        <div className='grid grid-cols-9' key={result.courseCode}>
                                            <div className='p-2 border border-stone-600'>
                                                <p>ct1</p>
                                                <input
                                                    type="number"
                                                    value={inputValues[`${student.studentID}-${selectedCourse}`] || result.detailsMark[0].ct1}
                                                    onChange={(e) => handleInputChange(student.studentID, selectedCourse, e.target.value)}
                                                />
                                            </div>
                                            {/* <p className='p-2 border border-l-blue-600'>ct1: {result.detailsMark[0].ct1}</p> */}
                                            <p className='p-2 border border-l-blue-600'>ct2: {result.detailsMark[0].ct2}</p>
                                            <p className='p-2 border border-l-blue-600'>ct3: {result.detailsMark[0].ct3}</p>
                                            <p className='p-2 border border-l-blue-600'>ct4: {result.detailsMark[0].ct4}</p>
                                            <p className='p-2 border border-l-blue-600'>Assignment 1: {result.detailsMark[0].assignment1}</p>
                                            <p className='p-2 border border-l-blue-600'>Assignment 2: {result.detailsMark[0].assignment2}</p>
                                            <p className='p-2 border border-l-blue-600'>Attendance: {result.detailsMark[0].attendanceMark}</p>
                                            <p className='p-2 border border-l-blue-600'>Part A: {result.detailsMark[0].partA}</p>
                                            <p className='p-2 border border-x-blue-600'>Part B: {result.detailsMark[0].partB}</p>
                                            {/* Add other marks similarly */}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                        <div>

                            <h3>Total mark: {
                                student.results.filter(result => result.subjectName === selectedCourse)
                                    .reduce((total, current) => {

                                        const mark = current.detailsMark[0];

                                        const ctMarks = [mark.ct1, mark.ct2, mark.ct3, mark.ct4].sort((a, b) => b - a).slice(0, 2);
                                        const ctTotal = ctMarks.reduce((sum, mark) => sum + mark, 0);
                                        return total + ctTotal + mark.assignment1 + mark.assignment2 + mark.attendanceMark + mark.partA + mark.partB;
                                    }, 0)
                            }</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubjectWiseMark;