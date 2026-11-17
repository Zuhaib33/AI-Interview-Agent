
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Auth from './Pages/Auth.jsx'

export const ServerUrl = "http://localhost:8000"

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />

    </Routes>
  )
}

export default App
