import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSelector } from 'react-redux';
import { BASE_URL, FRONT_URL } from '../../../redux/constants';
import './Navbar.css';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    console.log('Logout clicked'); // Replace with your actual logout logic
  };

  const goToLeaderboard = () => {
    navigate('/leaderboard'); // Navigate to leaderboard page
  };

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
        {/* Use the function-based navigation for leaderboard */}
        <button className="navbar-link" onClick={goToLeaderboard}>
          Leaderboard
        </button>
        <Link to="/profile-page" className="navbar-link">
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
  );
};

export default Navbar;
