// Sidebar.js
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // For navigation

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate(); // Hook to navigate between routes

  // Handle navigation
  const navigateTo = (path) => {
    navigate(path); // Navigate to the specified path
    toggleSidebar(); // Close the sidebar after clicking an item
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#3E7B27] text-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ width: '250px' }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#85A947]">
        <h2 className="text-xl font-bold">Menu</h2>
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />} {/* Toggle icons */}
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {/* Dashboard */}
        <li
          className="px-4 py-2 hover:bg-[#85A947] rounded-lg cursor-pointer"
          onClick={() => navigateTo('/dashboard')}
        >
          Dashboard
        </li>
        {/* Profile */}
        <li
          className="px-4 py-2 hover:bg-[#85A947] rounded-lg cursor-pointer"
          onClick={() => navigateTo('/profile')}
        >
          Profile
        </li>
        {/* Challenges */}
        <li
          className="px-4 py-2 hover:bg-[#85A947] rounded-lg cursor-pointer"
          onClick={() => navigateTo('/challenges')}
        >
          Challenges
        </li>
        {/* Community */}
        <li
          className="px-4 py-2 hover:bg-[#85A947] rounded-lg cursor-pointer"
          onClick={() => navigateTo('/community')}
        >
          Community
        </li>
        {/* Logout */}
        <li
          className="px-4 py-2 hover:bg-[#85A947] rounded-lg cursor-pointer"
          onClick={() => navigateTo('/logout')}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
