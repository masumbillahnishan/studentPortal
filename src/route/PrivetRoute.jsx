
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivetRoute = () => {
    const { user, loading } = useContext(AuthContext);
    if (loading) return <progress className="progress w-56"></progress>
    if (user) return children;


    return <Navigate to='/login' replace={true}></Navigate>
};


export default PrivetRoute;




