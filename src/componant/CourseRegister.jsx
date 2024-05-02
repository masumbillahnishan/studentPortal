import React from 'react';
import Swal from 'sweetalert2';

const CourseRegister = () => {
    const handleCourse = async (event) => {
        event.preventDefault();
        const form = event.target;

        const course = form.course.value;
        const department = form.department.value;
        const coursecode = form.coursecode.value;
        const credit = form.credit.value;
        const level = form.level.value;
        const term = form.term.value;

        if (!course || !department || !coursecode || !credit) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            });
            return;
        }

        const detailsMark = [
            {
                ct1: 0,
                ct2: 0,
                ct3: 0,
                ct4: 0,
                assignment1: 0,
                assignment2: 0,
                attendanceMark: 0,
                partA: 0,
                partB: 0,
            },
        ];
        const totalMark = 0;

        const result = {
            course,
            department,
            coursecode,
            credit,
            status: true,
            detailsMark,
            totalMark,
            level,
            term
        };

        try {
            const response = await fetch('http://localhost:5000/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(result),
            });

            if (!response.ok) {
                throw new Error('Failed to register course');
            }

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500,
            });

            form.reset();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Course Register!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCourse} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course Name</span>
                            </label>
                            <input type="text" placeholder="Course Name" name="course" className="input input-bordered" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Department
                            </label>
                            <select name="department" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="cse">CSE</option>
                                <option value="eee">EEE</option>
                                <option value="me">ME</option>
                                <option value="ipe">IPE</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course Code</span>
                            </label>
                            <input type="text" placeholder="Course Code" className="input input-bordered" name="coursecode" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Credit</span>
                            </label>
                            <input type="number" placeholder="Credit" className="input input-bordered" name="credit" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Level</span>
                            </label>
                            <input type="number" placeholder="Credit" className="input input-bordered" name="level" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Term</span>
                            </label>
                            <input type="number" placeholder="Credit" className="input input-bordered" name="term" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseRegister;
