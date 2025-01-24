import { useState } from 'react'
import './App.css'
import Login from './components/auth/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/common/Navbar/Navbar'
import Leaderboard from './Leaderboard/Leaderboard'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  )
}

export default App
