import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {

    const { user, userName, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }




    return (
        <div>
            <div className='flex justify-between items-center p-4 border- bg-gray-900 text-white'>
                <div>
                    <Link className='text-3xl font-bold hover:text-gray-300 transition duration-300 ease-in-out' to="/">BAUST</Link>
                </div>
                <div className='text-blue-100'>
                    <Marquee>
                        <h1>Bangladesh Army University of Science and Technology</h1>
                    </Marquee>
                </div>
                <div className="flex items-center space-x-4">


                    {
                        user ? <><span>{user.displayName}</span> <button onClick={handleLogOut} className="btn btn-xs ms-4">singOut</button> </> : <Link className='text-lg hover:text-gray-300 transition duration-300 ease-in-out' to="/login">LogIN</Link>
                    }

                    {
                      user &&  userName == 'teacher' ? <><Link className='text-lg hover:text-gray-300 transition duration-300 ease-in-out' to="/register">Register</Link></> : <></>
                    }


                    {/* <Link className='text-lg hover:text-gray-300 transition duration-300 ease-in-out' to="/login">LogIN</Link> */}
                    {/* <Link className='text-lg hover:text-gray-300 transition duration-300 ease-in-out' to="/register">SignIN</Link> */}

                </div>
            </div>
        </div>
    );
};

export default Header;