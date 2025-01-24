import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

export const createPost = asyncHandler(async (req, res) => {
  const { description, images } = req.body

  if (!description) {
    res.status(400)
    throw new Error('Description is required.')
  }

  const post = new Post({
    user: req.user._id, // Assuming `req.user` contains authenticated user
    description,
    images, // Array of image URLs
  })

  try {
    const createdPost = await post.save()
    res.status(201).json(createdPost)
  } catch (err) {
    res.status(500)
    throw new Error('Unable to create post.')
  }
})

export const likePost = asyncHandler(async (req, res) => {
  const { postId } = req.params

  const post = await Post.findById(postId)

  if (!post) {
    res.status(404)
    throw new Error('Post not found.')
  }

  const isLiked = post.likes.includes(req.user._id)

  if (isLiked) {
    post.likes = post.likes.filter(
      (id) => id.toString() !== req.user._id.toString()
    )
  } else {
    post.likes.push(req.user._id)
  }

  await post.save()
  res.status(200).json(post)
})

export const addComment = asyncHandler(async (req, res) => {
  const { postId } = req.params
  const { text } = req.body

  if (!text) {
    res.status(400)
    throw new Error('Comment text is required.')
  }

  const post = await Post.findById(postId)

  if (!post) {
    res.status(404)
    throw new Error('Post not found.')
  }

  const comment = {
    user: req.user._id,
    text,
  }

  post.comments.push(comment)
  await post.save()

  res.status(201).json(post)
})

export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()
    .populate('user', 'name avatar') // Include user details
    .populate('comments.user', 'name avatar') // Include comment user details
    .sort('-createdAt')

  res.status(200).json(posts)
})
