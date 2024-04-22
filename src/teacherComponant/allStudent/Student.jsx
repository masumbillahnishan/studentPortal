import React, { useState } from 'react';
import StudentDetails from './StudentDetails';

const Student = ({ student }) => {
    const { studentName, studentID, department, results, email, batch } = student;
    const [showDetails, setShowDetails] = useState(false);

    const openModal = () => {
        setShowDetails(true);
    };

    const closeModal = () => {
        setShowDetails(false);
    };

    return (
        <div className='border mx-3 my-2'>
            <div className='grid grid-cols-6 p-2'>
                <h2>{studentID}</h2>
                <h2>{studentName}</h2>
                <h2>{department}</h2>
                <h2>{results[0].level}</h2>
                <h2>{results[0].Term}</h2>
                <div>
                    <button className="btn" onClick={openModal}>Details</button>
                </div>

                {showDetails && (
                    <dialog open className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                            </form>
                            <h3 className="font-bold text-lg">{studentID}</h3>
                            <p>Name: {studentName}</p>
                            <p>Email: {email}</p>
                            <p>Batch: {batch}</p>

                        </div>
                    </dialog>
                )}
            </div>
        </div>
    );
};

export default Student;
