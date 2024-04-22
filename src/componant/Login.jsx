import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../provider/AuthProvider';
import Home from './Home';


const Login = () => {

    const {user,logIn,loader}=useContext(AuthContext)

    const handleLogIn=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email , password)

        logIn(email,password)
        .then(result=>{
            console.log(result.user)
            form.reset();
        })
    }




    return (
        <div >

           {
            user?<Home></Home>:<span> <div className="bg-cover bg-center min-h-screen hero min-h-screen bg-base-200" style={{backgroundImage: "url('/public/Image/9307421.png')"}}>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left w-96">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                   

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div></span>
           }
        </div>
    );
};

export default Login;