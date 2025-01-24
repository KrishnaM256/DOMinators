import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL, FRONT_URL } from '../../../redux/constants'
import './Navbar.css'
import { useLogoutMutation } from '../../../redux/api/usersApiSlice'
import { logout } from '../../../redux/features/auth/authSlice'
import { toast } from 'react-toastify' // Import toast

const Navbar = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [logoutApiCall] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
      toast.success('Logged out successfully!')
    } catch (error) {
      console.error('Error during logout:', error)
      toast.error('Failed to log out. Please try again.')
    }
  }

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        DOMinators
      </Link>
      <ul className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active navbar-link' : 'navbar-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? 'active navbar-link' : 'navbar-link'
          }
        >
          Community
        </NavLink>
        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            isActive ? 'active navbar-link' : 'navbar-link'
          }
        >
          Leaderboard
        </NavLink>
        <NavLink
          to="/sell"
          className={({ isActive }) =>
            isActive ? 'active navbar-link' : 'navbar-link'
          }
        >
          Sell
        </NavLink>
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
                <Link to="/profile-page" className="dropdown-item">
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
