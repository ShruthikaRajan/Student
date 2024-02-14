// import CustomNavbar from "./components/CustomNavbar"
// import SideNavBar from "./components/SideNavbar"

import Home from './pages/Home'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import {Lazy, Suspense} from 'react'
import { Suspense} from 'react';
import Spinner from './components/Spinner';
// const LazyAbout=lazy(()=> import('./pages/About'));


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add'
import About from './pages/About';
// import GetCourseDetails from './pages/GetCourseDetails';


const App =()=> {
  const router=createBrowserRouter([
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>}>
        <Home/>
      </Suspense>
    },
    {
      path:'/about',
      element:<Suspense fallback={<Spinner/>}><About></About>
        
      </Suspense>
    },
    {
      path:'/dashboard',
      element:<Suspense fallback={<Spinner/>}><Dashboard/></Suspense>
      
    },
    
    {
       path:'/login',
       element:<Suspense fallback={<Spinner/>}><Login></Login></Suspense>
    },
    {
      path:'/signup',
       element:<Suspense fallback={<Spinner/>}><Signup></Signup></Suspense>
    },
    {
      path:'/Add',
       element:<Suspense fallback={<Spinner/>}><Add></Add></Suspense>
    }
    


    



  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App

