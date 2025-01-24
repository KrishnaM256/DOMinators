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
import Community from './components/community/community'
import ChallengeStatus from './Profile/ChallengeStatus'
import Register from './components/auth/register/Register'
function App() {
  return (
    <Router>
      <Navbar />
      <Link to="/earn" className="earn-btn">
        Click and Earn
      </Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/community" element={<Community />} />
        <Route path="/challenge-status" element={<ChallengeStatus />}/>
      </Routes>
    </Router>
  )
}

export default App
