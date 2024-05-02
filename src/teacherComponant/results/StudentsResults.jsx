



import React, { useState } from 'react';

const StudentsResults = () => {
    const [totalMark, setTotalMark] = useState(0);

    const handleStudentMark = async (event) => {
        event.preventDefault();
        const form = event.target;
        const ct1 = parseInt(form.elements.ct1.value);
        const ct2 = parseInt(form.elements.ct2.value);
        const ct3 = parseInt(form.elements.ct3.value);
        const ct4 = parseInt(form.elements.ct4.value);
        const assignment1 = parseInt(form.elements.assignment1.value);
        const assignment2 = parseInt(form.elements.assignment2.value);
        const attendance = parseInt(form.elements.attendance.value);
        const partA = parseInt(form.elements.partA.value);
        const partB = parseInt(form.elements.partB.value);

        const total = ct1 + ct2 + ct3 + ct4 + assignment1 + assignment2 + attendance + partA + partB;
        setTotalMark(total);

        const subjectMarks = {
            subjectName: "Computer Architecture",
            courseCode: "CSE2101",
            detailsMark: {
                ct1,
                ct2,
                ct3,
                ct4,
                assignment1,
                assignment2,
                attendanceMark: attendance,
                partA,
                partB
            },
            totalMark: total,
            level: 2,
            Term: 1
        };

        try {
            const response = await fetch(`http://localhost:5000/students/${studentId}/marks`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subjectMarks),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={handleStudentMark} className="bg-gray-200 rounded-lg p-4">
            <div className="flex justify-between border-b-2 border-gray-400 mb-4">
                    <div className="font-bold">Student Name</div>
                    <div className="flex">
                        <div className="px-4">
                            <h2 className="font-bold">CT-1</h2>
                            <input name="ct1" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                        <div className="px-4">
                            <h2 className="font-bold">CT-2</h2>
                            <input name="ct2" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                        <div className="px-4">
                            <h2 className="font-bold">CT-3</h2>
                            <input name="ct3" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                        <div className="px-4">
                            <h2 className="font-bold">CT-4</h2>
                            <input name="ct4" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                        <div className="px-4">
                            <h2 className="font-bold">Assignment-1</h2>
                            <input name="assignment1" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                        <div className="px-4">
                            <h2 className="font-bold">Assignment-2</h2>
                            <input name="assignment2" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                        <div className="px-4">
                            <h2 className="font-bold">Attendance</h2>
                            <input name="attendance" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                        <div className="px-4">
                            <h2 className="font-bold">Part-A</h2>
                            <input name="partA" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                        <div className="px-4">
                            <h2 className="font-bold">Part-B</h2>
                            <input name="partB" type="number" className="border border-gray-400 rounded-md px-2 py-1 w-12 text-center" />
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="font-bold">Total Mark</div>
                        <input type="text" value={totalMark} className="border border-gray-400 rounded-md px-2 py-1 w-16 text-center" readOnly />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Submit</button>
            </form>
        </div>
    );
};

export default StudentsResults;
