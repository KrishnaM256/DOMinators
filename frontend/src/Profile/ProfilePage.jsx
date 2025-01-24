import React, { useEffect, useState } from 'react'
import * as Avatar from '@radix-ui/react-avatar'
import * as Tooltip from '@radix-ui/react-tooltip'
import { FaEdit } from 'react-icons/fa'
import './ProfilePage.css'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useSelector } from 'react-redux' // Import useSelector

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth) // Access userInfo from Redux store
  const [profile, setProfile] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    avatar: null,
  })

  // Fetch profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Use the token from userInfo in Redux state
        const token = userInfo?.token // Access token from userInfo

        if (!token) {
          console.error('No token found') // Handle case where token is not available
          return
        }

        const response = await axios.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        console.log('Profile Data:', response.data) // Log the profile data to see if it's returned correctly

        if (response.data) {
          setProfile(response.data)
          setFormData({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            phone: response.data.phone,
            address: response.data.address,
            city: response.data.city,
            state: response.data.state,
            avatar: response.data.avatar,
          })
        }
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }

    fetchProfile()
  }, [userInfo?.token]) // Re-fetch profile when token changes

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      avatar: e.target.files[0],
    })
  }

  // Update profile
  const handleSaveChanges = async () => {
    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key])
      })

      const response = await axios.put('/api/profile', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo?.token}`, // Use token from Redux store
        },
      })

      setProfile(response.data)
      setIsEditing(false)
      alert('Profile updated successfully!')
    } catch (error) {
      console.error('Error updating profile:', error)
      alert('Failed to update profile')
    }
  }

  // If the profile is not loaded yet
  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <Tooltip.Provider>
      <div className="flex min-h-screen w-[100%]">
        {/* Sidebar Component (Always visible on the left) */}
        <div className="w-64 bg-white shadow-xl fixed left-0 top-0 h-full">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="w-[100%] bg-gradient-to-r from-blue-500 via-green-400 to-green-600 flex items-center justify-center">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 space-y-6 border-t-4 border-green-600">
            {/* Profile Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <Avatar.Root>
                  <Avatar.Image
                    className="w-28 h-28 rounded-full border-4 border-[#3E7B27] object-cover"
                    src={profile?.avatar || '/public/cup-1.png'}
                    alt="Profile Avatar"
                  />
                  <Avatar.Fallback className="w-28 h-28 bg-[#85A947] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {profile?.firstName?.[0]}{profile?.lastName?.[0]}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <h2 className="text-3xl font-semibold text-[#3E7B27]">
                    {profile?.firstName} {profile?.lastName}
                  </h2>
                  <p className="text-[#737373] text-lg">
                    {profile?.city}, {profile?.state}
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

            {/* Profile Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#3E7B27]">About</h3>
                <p className="text-[#737373] text-sm">{profile?.about}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#3E7B27]">Contact</h3>
                <p className="text-[#737373] text-sm">{profile?.email}</p>
                <p className="text-[#737373] text-sm">{profile?.phone}</p>
              </div>
            </div>

            {/* Edit Form */}
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
                  <label className="block text-sm font-semibold">Avatar</label>
                  <input
                    type="file"
                    name="avatar"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-[#ccc] rounded-md"
                  />
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-center mt-8">
                  <button
                    className="bg-[#85A947] text-white py-3 px-6 rounded-full hover:bg-[#3E7B27] transition duration-300"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  )
}

export default ProfilePage
