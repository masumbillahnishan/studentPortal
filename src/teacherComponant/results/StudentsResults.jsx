import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const StudentsResults = () => {
    const data = useContext(AuthContext);


    const renderStudentDetails = (level) => {
        return (
            <div key={level}>
                <h2>Level {level} Term 1</h2>
                {
                data.map(student => (
                    <div key={student.studentID}>
                        <h3>{student.studentName}</h3>
                        {student.results.map(result => {
                            if (result.level === level && result.Term === 1) {
                                return (
                                    <div key={result.courseCode}>
                                        <h4>{result.subjectName}</h4>
                                        <p>CT1: {result.detailsMark[0].ct1}</p>
                                        <p>CT2: {result.detailsMark[0].ct2}</p>
                                        <p>CT3: {result.detailsMark[0].ct3}</p>
                                        <p>CT4: {result.detailsMark[0].ct4}</p>
                                        <p>Total Mark: {result.totalMark}</p>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            {renderStudentDetails(1)}
            {renderStudentDetails(2)}
            {renderStudentDetails(3)}
            {renderStudentDetails(4)}
        </div>
    );
};

export default StudentsResults;
