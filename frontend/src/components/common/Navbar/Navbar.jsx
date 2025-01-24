import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL, FRONT_URL } from '../../../redux/constants'
import { logout } from '../../../redux/features/auth/authSlice'
import './Navbar.css'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    setDropdownOpen(false)
  }

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        DOMinators
      </Link>
      <ul className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/community" className="navbar-link">
          Community
        </Link>
        <Link to="/leaderboard" className="navbar-link">
          Leaderboard
        </Link>
        <Link to="/sell" className="navbar-link">
          Sell
        </Link>
      </ul>
      <div className="user-actions">
        <div className="profile-points">Points</div>
        {userInfo ? (
          <div className="profile-dropdown">
            <img
              src={
                userInfo.avatar
                  ? `${BASE_URL}/${userInfo.avatar}`
                  : `${FRONT_URL}/profile.svg`
              }
              alt="profile"
              className="profile-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="dropdown-item logout-btn"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <NavLink to="/login" className="signin-btn">
              Sign in
            </NavLink>
            <Link to="/register" className="join-btn">
              Join
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
