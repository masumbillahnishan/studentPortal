import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const TeacherSideBar = () => {
   
    return (
        <div>
          
                <div className='overflow-y-auto'>
                    <div className='flex justify-between items-center px-5 py-4'>
                        <button className='text-white focus:outline-none lg:hidden'>
                            <svg
                                className='w-6 h-6 '
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0h24v24H0z' fill='none' />
                                <path
                                    fill='#FFFFFF'
                                    d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'
                                />
                            </svg>
                        </button>
                    </div>
                    <nav className='mt-6'>
                    <Link
                           to='/'
                           className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                           Home
                       </Link>
                        <Link
                            to='/students'
                            className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                            Students
                        </Link>
                        <Link
                            to='/results'
                            className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                            Results
                        </Link>
                        <Link
                            to='/course'
                            className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                            Course
                        </Link>
                        <Link
                            to='/batch'
                            className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                            Batch
                        </Link>
                        <Link
                            to='/contact'
                            className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                            Contact
                        </Link>
                        <Link
                            to='/about'
                            className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                            About
                        </Link>
                    </nav>
                </div>
           
            
        </div>
    );
};


export default TeacherSideBar;