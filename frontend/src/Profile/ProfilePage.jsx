import React, { useState } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FaEdit } from 'react-icons/fa';
import './ProfilePage.css';
import Sidebar from './Sidebar';

const ProfilePage = () => {
  // Mock user data
  const mockUserInfo = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street',
    city: 'Anytown',
    state: 'Anystate',
    avatar: null,
    about: 'Passionate developer with expertise in React.',
  };

  const [profile, setProfile] = useState(mockUserInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...mockUserInfo });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prevData) => ({
          ...prevData,
          avatar: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setProfile(formData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <Tooltip.Provider>
      <div className="flex min-h-screen w-[100%]">
        <div className="w-64 bg-white shadow-xl fixed left-0 top-0 h-full">
          <Sidebar />
        </div>

        <div className="w-[100%] bg-gradient-to-r from-blue-500 via-green-400 to-green-600 flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 space-y-6 border-t-4 border-green-600">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <Avatar.Root>
                  <Avatar.Image
                    className="w-28 h-28 rounded-full border-4 border-[#3E7B27] object-cover"
                    src={profile.avatar || '/public/cup-1.png'}
                    alt="Profile Avatar"
                  />
                  <Avatar.Fallback className="w-28 h-28 bg-[#85A947] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <h2 className="text-3xl font-semibold text-[#3E7B27]">
                    {profile.firstName} {profile.lastName}
                  </h2>
                  <p className="text-[#737373] text-lg">
                    {profile.city}, {profile.state}
                  </p>
                </div>
              </div>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button
                    className="text-[#85A947] hover:text-[#3E7B27] transition duration-200"
                    onClick={() => setIsEditing(true)}
                  >
                    <FaEdit size={28} />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="top"
                  className="bg-[#3E7B27] text-white p-2 rounded-md"
                >
                  Edit Profile
                </Tooltip.Content>
              </Tooltip.Root>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#3E7B27]">About</h3>
                <p className="text-[#737373] text-sm">{profile.about}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#3E7B27]">Contact</h3>
                <p className="text-[#737373] text-sm">{profile.email}</p>
                <p className="text-[#737373] text-sm">{profile.phone}</p>
              </div>
            </div>

            {isEditing && (
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold">Avatar</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>

                <button
                  onClick={handleSaveChanges}
                  className="w-full p-3 bg-[#3E7B27] text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
};

export default ProfilePage;
