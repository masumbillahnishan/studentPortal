import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Result from '../studentComponant/result/Result';
import Login from '../componant/Login';

const StudentSidebar = () => {
   const {user}=useContext(AuthContext)
    return (
        <div>
          
                
                <div className='overflow-y-auto bg-black h-screen'>
                   
                   <nav className='mt-6'>
                      
                       <Link
                           to='/'
                           className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                           Home
                       </Link>
                       <Link
                           to='/studentresult'
                           className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>
                           Results
                       </Link>
                       <Link
                           to='/studentdetailsresult'
                           className='block py-2 px-4 text-white hover:bg-gray-700 transition duration-200'>Details
                           Results
                       </Link>
                      
                   </nav>
               </div>
           
            
        </div>
    );
};

export default StudentSidebar;
