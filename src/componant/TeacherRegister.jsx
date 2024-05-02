import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Home from './Home';
import Swal from 'sweetalert2';

const TeacherRegister = () => {
    const { signIn, userName } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const userType = 'teacher'; // Set userType directly here
        const password = form.password.value;
        const studentID = form.studentID.value;
        const department = form.department.value;
        const designation = form.designation.value;
        const studentName = form.studentName.value;

        const userData = { studentID, studentName, email, department, designation };

        signIn(email, password, userType)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setError(null); // Reset error state
            })
            .catch(signInError => {
                console.log(signInError.message);
                setError(signInError.message);
            });

        fetch('http://localhost:5000/teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Email already registered');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });

                form.reset();
            })
            .catch(fetchError => {
                console.error('Error:', fetchError);
                setError(fetchError.message);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Email Already exist',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            {userName === 'teacher' ? (
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-2xl mb-4 text-center font-bold">Teacher Register!</h1>
                        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                        <form onSubmit={handleRegister}>
                            <input type="hidden" name="userType" value="teacher" />
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">ID</label>
                                <input
                                    type="text"
                                    name="studentID"
                                    placeholder="Student/teacher ID"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="studentName"
                                    placeholder="Teacher/Student Name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Department</label>
                                <select
                                    name="department"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="cse">CSE</option>
                                    <option value="eee">EEE</option>
                                    <option value="me">ME</option>
                                    <option value="ipe">IPE</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Designation</label>
                                <select
                                    name="designation"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="lecturer">Lecturer</option>
                                    <option value="professor">Professor</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <Home />
            )}
        </div>
    );
};

export default TeacherRegister;
