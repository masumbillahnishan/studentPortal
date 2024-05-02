import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Students = () => {
    const students = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto py-8">
            {user ? (
                <>
                    <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">All Student Details</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {students.map(student => (
                            <div key={student.studentID} className="bg-white rounded-lg shadow-md p-6">
                                <p className="text-xl font-semibold text-gray-800 mb-2">{student.studentName}</p>
                                <p className="text-gray-600 mb-2">{student.email}</p>
                                <p className="text-gray-600">Batch: {student.batch}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Students;
