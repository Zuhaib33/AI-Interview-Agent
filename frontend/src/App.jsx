
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Auth from './Pages/Auth.jsx'
import { useEffect } from 'react'
import axios from 'axios'



export const ServerUrl = "http://localhost:8000"

const App = () => {

  useEffect(() => {
    const getUser = async () => {
      try{
        const result = await axios.get(ServerUrl + "/api/user/currentUser", { withCredentials: true });
        console.log(result.data);
      }catch(err){
        console.log(err);
      }
    }
    getUser();
  }, []);



  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />

    </Routes>
  )
}

export default App
