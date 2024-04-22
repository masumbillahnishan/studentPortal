import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Result = () => {
    const data = useLoaderData();
    const { user,userEmail } = useContext(AuthContext);
    
    const userResults = data.find(student => student.email === userEmail)?.results;

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Your Results</h1>
            {userResults ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Display user's results */}
                    {userResults.map((result, index) => (
                        <div className="bg-white rounded shadow p-4" key={index}>
                            <h2 className="text-lg font-semibold mb-2">{result.subjectName}</h2>
                            <p className="text-gray-600">Total Mark: {result.totalMark}</p>
                            {/* Add more details if needed */}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">No results found for the logged-in user.</p>
            )}
        </div>
    );
};

export default Result;
