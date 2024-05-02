import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Home from './Home';

const Login = () => {
    const { user, logIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const handleLogIn = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await logIn(email, password);
          
            setLoginError(null);
        } catch (error) {
            setLoginError('Wrong Email or Password.');
        }
    };

    return (
        <div>
            {user ? (
                <Home />
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/public/Image/img1.jpg')" }}>
                    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <h1 className="text-3xl font-semibold text-white text-center mb-8">Login</h1>
                        <form onSubmit={handleLogIn}>
                            <div className="mb-4">
                                <label htmlFor="email" className="text-black block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" className="px-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder='Email' required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-black text-sm font-medium text-gray-700">Password</label>
                                <input type="password" name="password" id="password" className="mt-1 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder='Password' required />
                            </div>
                            {loginError && (
                                <div className="mb-4 text-red-500 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 mr-2 -mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 1a9 9 0 110 18a9 9 0 010-18zM5.707 7.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586l-2.293-2.293z" clipRule="evenodd" />
                                    </svg>
                                    {loginError}
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
