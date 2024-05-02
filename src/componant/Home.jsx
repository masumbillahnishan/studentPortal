import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
           <div style={{ backgroundImage: "url('/public/Image/img1.jg')" }} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/public/Image/Baust buiding.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl text-whi font-bold">BAUST Student Portal!</h1>
      <p className="py-6">We believe a creative person is a person with lot of prospects for his or her institution, society and country. We encourage and inspire every students to be creative dream catcher.</p>
     {
        user?<></>: <Link to='/login' className="btn btn-primary">LOGIN</Link>
     }
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;