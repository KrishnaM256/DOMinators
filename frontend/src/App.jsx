import { useState } from 'react'
import './App.css'
import Login from './components/auth/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/common/Navbar/Navbar'
import Leaderboard from './Leaderboard/Leaderboard'
import ProfilePage from './Profile/ProfilePage'
import Challenges from './Profile/Challenges'
import Journey from './Profile/Journey'
import Quizzes from './Profile/Quizzes'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/quizzes" element={<Quizzes />} />
      </Routes>
    </Router>
  )
}

export default App
