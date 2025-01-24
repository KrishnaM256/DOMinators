import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FaEdit, FaPlusCircle } from 'react-icons/fa';
import './ProfilePage.css';
import Sidebar from './Sidebar';

const ProfilePage = () => {
  return (
    <Tooltip.Provider>
      <div className="relative flex min-h-screen">
        {/* Sidebar Component (Always visible on the left) */}
        <div className="w-64 bg-white shadow-xl fixed left-0 top-0 h-full">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 ml-64 bg-gradient-to-r from-blue-500 via-green-400 to-green-600 flex items-center justify-center">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 space-y-6 border-t-4 border-green-600">
            {/* Profile Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <Avatar.Root>
                  <Avatar.Image
                    className="w-28 h-28 rounded-full border-4 border-[#3E7B27] object-cover"
                    src="/public/cup-1.png"  // Ensure the correct path for your image
                    alt="Paper Cup Project"
                  />
                  <Avatar.Fallback className="w-28 h-28 bg-[#85A947] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    C
                  </Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <h2 className="text-3xl font-semibold text-[#3E7B27]">Agriculture Innovation Hub</h2>
                  <p className="text-[#737373] text-lg">Empowering Sustainable Farming</p>
                </div>
              </div>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className="text-[#85A947] hover:text-[#3E7B27] transition duration-200">
                    <FaEdit size={28} />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Content side="top" className="bg-[#3E7B27] text-white p-2 rounded-md">
                  Edit Profile
                </Tooltip.Content>
              </Tooltip.Root>
            </div>

            {/* Profile Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#3E7B27]">About</h3>
                <p className="text-[#737373] text-sm">
                  Leading a vision for sustainable farming solutions, with a focus on data-driven approaches and
                  technology. We are committed to improving food security and agricultural practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#3E7B27]">Contact</h3>
                <p className="text-[#737373] text-sm">info@agrihub.com</p>
                <p className="text-[#737373] text-sm">+91 987 654 3210</p>
              </div>
            </div>

            {/* Add Social Links */}
            <div className="flex space-x-6 mt-6">
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href="https://github.com/agrihub"
                    className="text-[#85A947] hover:text-[#3E7B27] transition duration-200"
                  >
                    <FaPlusCircle size={28} />
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content side="top" className="bg-[#3E7B27] text-white p-2 rounded-md">
                  Add Github
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href="https://linkedin.com/company/agrihub"
                    className="text-[#85A947] hover:text-[#3E7B27] transition duration-200"
                  >
                    <FaPlusCircle size={28} />
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content side="top" className="bg-[#3E7B27] text-white p-2 rounded-md">
                  Add LinkedIn
                </Tooltip.Content>
              </Tooltip.Root>
            </div>

            {/* Action Button */}
            <div className="flex justify-center mt-8">
              <button className="bg-[#85A947] text-white py-3 px-6 rounded-full hover:bg-[#3E7B27] transition duration-300">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
};

export default ProfilePage;
