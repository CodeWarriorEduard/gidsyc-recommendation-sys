import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../views/Landing/Landing';
import Login from '../views/Login/Login';
import ErrorPage from '../views/Error/Error-Page';
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
        }
    ]);
    
    return(
       <RouterProvider router={routes}></RouterProvider>
    )
}


export default RouterProv