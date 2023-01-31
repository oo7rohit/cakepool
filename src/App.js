import React from 'react'
import LoadingPage from './Components/LoadingPage'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import './style.css'
export default function App() {
  return (
    <div>
        <Navbar/>
        <LoadingPage/>
        <HomePage/>
    </div>
  )
}
