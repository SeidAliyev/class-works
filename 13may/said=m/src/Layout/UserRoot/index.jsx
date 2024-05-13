import React from 'react'
import Navbar from '../Navbar'

import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const UserRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserRoot