import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FaEdit, FaPlusCircle } from 'react-icons/fa';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#EFE3C2]">
      {/* Profile Card Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 space-y-6">
        {/* Profile Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <Avatar.Root>
              <Avatar.Image
                className="w-20 h-20 rounded-full border-4 border-[#3E7B27] object-cover"
                src="https://via.placeholder.com/150"
                alt="User Profile"
              />
              <Avatar.Fallback className="w-20 h-20 bg-[#85A947] rounded-full flex items-center justify-center text-white text-xl font-bold">
                U
              </Avatar.Fallback>
            </Avatar.Root>
            <div>
              <h2 className="text-2xl font-bold text-[#3E7B27]">John Doe</h2>
              <p className="text-[#737373] text-sm">Frontend Developer</p>
            </div>
          </div>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <button className="text-[#85A947] hover:text-[#3E7B27] transition duration-200">
                <FaEdit size={24} />
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
            <h3 className="text-lg font-semibold text-[#3E7B27]">About</h3>
            <p className="text-[#737373] text-sm">
              Passionate frontend developer with a focus on clean code and user experience. Always learning new
              technologies and building exciting projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#3E7B27]">Contact</h3>
            <p className="text-[#737373] text-sm">john.doe@example.com</p>
            <p className="text-[#737373] text-sm">+123 456 7890</p>
          </div>
        </div>

        {/* Add Social Links */}
        <div className="flex space-x-6 mt-6">
          <Tooltip.Root>
            <Tooltip.Trigger>
              <a
                href="https://github.com"
                className="text-[#85A947] hover:text-[#3E7B27] transition duration-200"
              >
                <FaPlusCircle size={24} />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Content side="top" className="bg-[#3E7B27] text-white p-2 rounded-md">
              Add Github
            </Tooltip.Content>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <a
                href="https://linkedin.com"
                className="text-[#85A947] hover:text-[#3E7B27] transition duration-200"
              >
                <FaPlusCircle size={24} />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Content side="top" className="bg-[#3E7B27] text-white p-2 rounded-md">
              Add LinkedIn
            </Tooltip.Content>
          </Tooltip.Root>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#85A947] text-white py-2 px-4 rounded-lg hover:bg-[#3E7B27] transition duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
