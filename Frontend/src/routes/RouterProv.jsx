import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../views/Landing/Landing';
import Login from '../views/Login/Login';
import ErrorPage from '../views/Error/Error-Page';
import Signup from '../views/Signup/Signup';

import { Component } from 'react';

function RouterProv(){
    
    const routes = createBrowserRouter([
        {path:"/",
        Component:Landing,
        errorElement: <ErrorPage/>
        },
        {path:"/home",
        Component:""
        },
        {path:"/login",
        Component:Login
        },
        {path:"/signup",
        Component: Signup
        }
    ]);
    
    return(
       <RouterProvider router={routes}></RouterProvider>
    )
}


export default RouterProv