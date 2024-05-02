import React, { useContext } from 'react';
import Header from '../componant/Header';
import { Link, Outlet } from 'react-router-dom';
import StudentSidebar from '../sideBar/StudentSidebar';
import TeacherSideBar from '../sideBar/TeacherSideBar';
import { AuthContext } from '../provider/AuthProvider';

const Main = () => {
    const { user, userName, loading } = useContext(AuthContext);
    console.log(userName)
    if (loading) return <div className='flex items-center justify-center'>
        <div className='my-96'>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
    </div>
    return (
        <div>
            <Header />
            <div className='flex'>
                {user && userName === 'teacher' && (
                    <div className='bg-gray-800 h-screen relative flex w-48'>
                        <TeacherSideBar  />
                    </div>
                )}
                {user && userName === 'student' && <StudentSidebar />}


                <div className='flex-1'>
                    <Outlet ></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;