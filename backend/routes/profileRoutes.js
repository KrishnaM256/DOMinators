import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/profileController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Routes for logged-in user profile
router.route('/').get(authenticate, getUserProfile).put(authenticate, updateUserProfile);

export default router;
