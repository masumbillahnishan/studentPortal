import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const StudentDetailsResult = () => {
    const data = useLoaderData();
    const { user, userEmail, userName } = useContext(AuthContext);

    const userDetails = data.find(student => student.email === userEmail);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Subjects Details for {userName}</h2>
            {userDetails && userDetails.results.map(subject => (
                <div key={subject.courseCode} className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">{subject.subjectName}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>CT1: {subject.detailsMark[0].ct1}</p>
                            <p>CT2: {subject.detailsMark[0].ct2}</p>
                            <p>CT3: {subject.detailsMark[0].ct3}</p>
                            <p>CT4: {subject.detailsMark[0].ct4}</p>
                        </div>
                        <div>
                            <p>Assignment 1: {subject.detailsMark[0].assignment1}</p>
                            <p>Assignment 2: {subject.detailsMark[0].assignment2}</p>
                            <p>Attendance Mark: {subject.detailsMark[0].attendanceMark}</p>
                            <p>Part A: {subject.detailsMark[0].partA}</p>
                            <p>Part B: {subject.detailsMark[0].partB}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StudentDetailsResult;
