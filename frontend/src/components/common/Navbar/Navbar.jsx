import React, { useState } from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { Link, NavLink, useNavigate } from 'react-router-dom' // Use NavLink instead of Link
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../../redux/constants'
import profileImg from '../../../assets/profile.svg'
import Sidebar from './SideBar/Sidebar'
import { IoMenu } from 'react-icons/io5'

import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth)
  const profile = userInfo?.avatar
    ? BASE_URL + '/' + userInfo.avatar
    : profileImg
  console.log(profile)

  return (
    <>
      <div style={{ height: '65px' }}></div>
      {open && <Sidebar open={open} setOpen={setOpen} />}
      <nav className="nav">
        <ul>
          <li className="logo">
            <IoMenu className="icon menuIcon" onClick={() => setOpen(!open)} />
            <p onClick={() => navigate('/')}>
              Style <span>Nexus</span>
            </p>
          </li>
          <div className="linkContainer">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active navLink' : 'navLink'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? 'active navLink' : 'navLink'
                }
              >
                Catalog
              </NavLink>
            </li>
          </div>
          <div className="cartContainer">
            <>
              {userInfo ? (
                <div className="flexContainer">
                  <li>
                    <Link
                      to="/cart"
                      className={({ isActive }) =>
                        isActive ? 'active' : 'icon '
                      }
                    >
                      <IoBagOutline className="cart" />
                    </Link>
                  </li>
                  <Link to={'/'} id="menuBtn">
                    <img src={profile} className="profile-img" />
                  </Link>
                </div>
              ) : (
                <Link to="/login" className="login">
                  Sign in/Sign up
                </Link>
              )}
            </>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
