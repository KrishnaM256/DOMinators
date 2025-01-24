import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-800 to-gray-700 text-white p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-[#85A947] mb-8">Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/profile-page"
            className="block py-2 px-4 rounded-lg hover:bg-[#85A947] hover:text-white transition duration-200"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/challenges"
            className="block py-2 px-4 rounded-lg hover:bg-[#85A947] hover:text-white transition duration-200"
          >
            Challenges
          </Link>
        </li>
        <li>
          <Link
            to="/journey"
            className="block py-2 px-4 rounded-lg hover:bg-[#85A947] hover:text-white transition duration-200"
          >
            Journey
          </Link>
        </li>

        <li>
          <Link
            to="/quizzes"
            className="block py-2 px-4 rounded-lg hover:bg-[#85A947] hover:text-white transition duration-200"
          >
            Quizzes
          </Link>
        </li>
        
        <li>
          <Link
            to="/community"
            className="block py-2 px-4 rounded-lg hover:bg-[#85A947] hover:text-white transition duration-200"
          >
            Community
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
