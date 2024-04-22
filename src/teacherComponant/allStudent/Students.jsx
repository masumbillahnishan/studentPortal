import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Student from './Student';
import { AuthContext } from '../../provider/AuthProvider';
import Login from '../../componant/Login';


const Students = () => {
    const students = useLoaderData();
    const { user, userName } = useContext(AuthContext)
    return (
        <div>
            {
                user ? <>
                    <h1 className='bg-emerald-100'>All Student Details</h1>
                    <div className='mx-3 grid grid-cols-6 p-2'>
                        <h2>ID</h2>
                        <h2>Name</h2>
                        <h2>Department</h2>
                        <h2>Level</h2>
                        <h2>Term</h2>
                        <h2>Details</h2>
                    </div>
                    {
                        students.map(student => <Student
                            key={student.studentID}
                            student={student}
                        />)
                    }
                </> : <Login></Login>
            }
        </div>
    );
};

export default Students;
