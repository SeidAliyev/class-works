import { useState } from 'react'
import './App.css'
import Contact from './Pages/Contact/indeex';
import Home from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserRoot from './Layout/UserRoot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoot/>,
    children:[
      {
    path: "/contact",
    element: <Contact/>,
    },
    {
      path: "/",
      element: <Home/>,
    },
    ]
  }
  
]);

function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
