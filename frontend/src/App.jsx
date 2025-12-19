import React, { useEffect } from "react"
import {Routes, Route, Navigate } from "react-router-dom"
import axios from "./Utils/axios"
import LoginForm from "./Pages/Login"
import Registeration from "./Pages/Registration"
import Home from "./Pages/Home"
import History from "./Pages/History"

import Classification from "./Pages/Classification"
import './index.css'
function Logout() {
  localStorage.clear()
  return <Navigate to="/loginform" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  const checkServer = async()=>{
    const response = await axios.get("/v1")
    const data = await response.data
    console.log(data);
  }

  useEffect(()=>{
    checkServer()
  },[])
  return (
 
      <Routes>
        <Route
          path="/"
          element={
              <LoginForm />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/registration" element={<Registeration/>}/>
        <Route path="/classification" element={<Classification/>}/>
        <Route path="/history" element={<History />} />
      
      </Routes>
   
  )
}

export default App