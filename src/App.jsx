import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from './components/Frontpage'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Contact from './components/Contact'



function App() {
  return (
   
    <div >
    <Navbar/>
    <Routes>
      <Route path="/" element={<Frontpage/>}     />
      <Route path="/About" element={<About/>}     />
      <Route path="/Services" element={<Services/>}     />
      <Route path="/Contact" element={<Contact/>}     />
      
    </Routes>
    </div>
   
  )
}

export default App;
