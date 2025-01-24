import User from '../models/userModel.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import bcrypt from 'bcryptjs';

// Fetch logged-in user profile
export const getUserProfile = asyncHandler(async (req, res) => {
  console.log('Fetching user profile for user ID:', req.user._id); // Log the user ID

  const user = await User.findById(req.user._id).select('-password');
  if (user) {
    console.log('User profile fetched successfully:', user); // Log the fetched user data
    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      state: user.state,
      avatar: user.avatar,
    });
  } else {
    console.error('User not found with ID:', req.user._id); // Log when user is not found
    res.status(404);
    throw new Error('User not found!');
  }
});

// Update logged-in user profile
export const updateUserProfile = asyncHandler(async (req, res) => {
  console.log('Updating profile for user ID:', req.user._id); // Log the user ID

  const user = await User.findById(req.user._id);
  if (user) {
    console.log('User found, proceeding with profile update'); // Log that the user was found

    // Update fields based on the request body
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;
    user.city = req.body.city || user.city;
    user.state = req.body.state || user.state;

    if (req.body.avatar) {
      console.log('Updating avatar'); // Log avatar update
      user.avatar = req.body.avatar;
    }

    if (req.body.password) {
      console.log('Updating password'); // Log password update
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();
    console.log('Profile updated successfully:', updatedUser); // Log successful update

    res.status(200).json({
      id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      phone: updatedUser.phone,
      address: updatedUser.address,
      city: updatedUser.city,
      state: updatedUser.state,
      avatar: updatedUser.avatar,
    });
  } else {
    console.error('User not found with ID:', req.user._id); // Log when user is not found
    res.status(404);
    throw new Error('User not found!');
  }
});
