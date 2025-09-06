import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './components/Navbar';
import Index from './pages/Index';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  )
}

export default App
