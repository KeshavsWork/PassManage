import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <div>
       <Navbar/>
       <Manager/>
       <Footer/>
      </div>
      
    </>
  )
}

export default App
