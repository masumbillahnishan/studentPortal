import React from 'react';

import ReactDOM from  "react-dom/client";
import App from './App.jsx';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './componant/Home.jsx';
import Login from './componant/Login.jsx';
import Students from './teacherComponant/allStudent/Students.jsx';
import Register from './componant/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Course from './teacherComponant/course/Course.jsx';
import Result from './studentComponant/result/Result.jsx';
import StudentDetailsResult from './studentComponant/result/StudentDetailsResult.jsx';
import StudentsResults from './teacherComponant/results/StudentsResults.jsx';

import CourseRegister from './componant/CourseRegister.jsx';
import TeacherRegister from './componant/TeacherRegister.jsx';
import CoursAssignToStudents from './teacherComponant/course/CoursAssignToStudents.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>,
                loader: () => fetch('http://localhost:5000/students')
            },
            {
                path: "/students",
                element: <Students></Students>,
                loader: () => fetch('http://localhost:5000/students')
            },
            {
                path: "/results",
                element: <StudentsResults></StudentsResults>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: "/studentresult",
                element: <Result></Result>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: "/studentdetailsresult",
                element: <StudentDetailsResult></StudentDetailsResult>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: "/course",
                element: <Course></Course>,
                loader: () => fetch('/public/data.json')
            },
            
            {
              path:'/courseregister',
              element:<CourseRegister></CourseRegister>
            },
            
            {
              path:'/teacherregister',
              element:<TeacherRegister></TeacherRegister>
            
            },
            
            {
              path:'/courseassigntostudent',
              element:<CoursAssignToStudents></CoursAssignToStudents>,
              loader:()=>fetch('http://localhost:5000/students')
            }
        ],
    },
]);

ReactDOM.createRoot (document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
);
