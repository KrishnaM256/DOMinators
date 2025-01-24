import express from 'express'
import {
  createPost,
  likePost,
  addComment,
  getPosts,
} from '../controllers/postController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(authenticate, createPost).get(authenticate, getPosts) // Create and fetch posts
router.route('/:postId/like').put(authenticate, likePost) // Like/unlike post
router.route('/:postId/comment').post(authenticate, addComment) // Add comment to post

export default router
