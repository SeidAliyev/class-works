import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Adds from './components/Adds'
import MainAdds from './components/MainAdds'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Adds/>
      <MainAdds/>
    </>
  )
}

export default App
