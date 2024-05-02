import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Result = ({ user }) => {
    const [results, setResults] = useState([]);
    const [updatedResults, setUpdatedResults] = useState([]);

    // Fetch user's results
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/students/${user.studentID}`);
                setResults(response.data.result);
                setUpdatedResults(response.data.result);
            } catch (error) {
                console.error('Error fetching user results:', error);
            }
        };
        fetchData();
    }, [user.studentID]);

    // Handle input change for marks
    const handleInputChange = (index, field, value) => {
        const updated = [...updatedResults];
        updated[index].detailsMark[0][field] = value;
        setUpdatedResults(updated);
    };

    // Handle result update
    const updateResults = async () => {
        try {
            const response = await axios.patch(`http://localhost:5000/students/${user.studentID}`, {
                results: updatedResults
            });
            console.log('Result updated successfully:', response.data);
            // If needed, you can update the state or show a success message
        } catch (error) {
            console.error('Error updating results:', error);
            // Handle error, show error message, etc.
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Your Results</h1>
            {results.length > 0 ? (
                <div>
                    {/* Display user's results */}
                    {updatedResults.map((result, index) => (
                        <div className="bg-white rounded shadow p-4 mb-4" key={index}>
                            <h2 className="text-lg font-semibold mb-2">{result.courseName}</h2>
                            <div>
                                {/* Display and allow update for each mark */}
                                <label className="block mb-2">CT1:</label>
                                <input
                                    type="number"
                                    value={result.detailsMark[0].ct1}
                                    onChange={(e) => handleInputChange(index, 'ct1', e.target.value)}
                                />
                                {/* Repeat similar input fields for other marks */}
                            </div>
                        </div>
                    ))}
                    {/* Button to update results */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updateResults}>
                        Update Results
                    </button>
                </div>
            ) : (
                <p className="text-gray-600">No results found for the logged-in user.</p>
            )}
        </div>
    );
};

export default Result;
