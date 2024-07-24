import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Routes/Login.jsx";
import Home from "./Routes/Home.jsx";
import Register from "./Routes/Register.jsx";
import Ap from './Ap.jsx';

function App() {
  return (
    <div className=''>
      <div className='fixed w-[99vw] top-0'>
      <Ap/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </div>
  )
}
 export default App