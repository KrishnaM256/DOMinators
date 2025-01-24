import React, { useState } from 'react'
import './community.css'
import {
  useCreatePostMutation,
  useGetPostsQuery,
  useAddCommentMutation,
  useLikePostMutation,
} from './../../redux/api/postSlice'
import { BASE_URL } from '../../redux/constants'
import { FaRegComment } from 'react-icons/fa6'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Community = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const [createPost] = useCreatePostMutation() // RTK Query mutation hook for creating a post
  const [addComment] = useAddCommentMutation() // RTK Query mutation hook for adding comments
  const [toggleLike] = useLikePostMutation()
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const { data: posts, refetch } = useGetPostsQuery()
  const [selectedPost, setSelectedPost] = useState(null)
  const [commentText, setCommentText] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFileChange = (e) => {
    setImage(e.target.files[0]) // Store the selected file
  }
  const handleLike = async (id) => {
    try {
      await toggleLike(id).unwrap()
      toast.success('Post liked/unliked successfully')
    } catch (err) {
      console.error(err)
    }
    refetch()
  }
  const handlePostSubmit = async (e) => {
    e.preventDefault()

    if (!description.trim()) {
      toast.error('Description cannot be empty.')
      return
    }

    const formData = new FormData() // Use FormData for sending file and text data
    formData.append('description', description)
    if (image) formData.append('image', image)

    try {
      await createPost(formData).unwrap() // Call the createPost API
      setDescription('') // Clear the input field
      setImage(null) // Clear the file input
      toast.success('Post created successfully!')
    } catch (err) {
      console.error('Error creating post:', err)
      toast.error('Failed to create post.')
    }
    refetch()
  }

  const openCommentsModal = (post) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const closeCommentsModal = () => {
    setSelectedPost(null)
    setIsModalOpen(false)
  }

  const handleAddComment = async () => {
    if (!commentText.trim()) {
      toast.error('Comment cannot be empty.')
      return
    }

    try {
      await addComment({ postId: selectedPost._id, text: commentText }).unwrap()
      setCommentText('') // Clear the comment input field
      refetch() // Refresh posts to fetch the updated comments
      toast.success('Comment added successfully!')
    } catch (err) {
      console.error('Error adding comment:', err)
      toast.error('Failed to add comment.')
    }
    refetch()
  }

  return (
    <div className="flex relative justify-center items-center my-20">
      <div className="hidden lg:block w-1/4"></div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <form
          className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
          encType="multipart/form-data"
        >
          <textarea
            className="w-full h-24 p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="What's on your mind?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex items-center justify-between">
            <input
              type="file"
              className="file:mr-4 file:px-4 file:py-2 file:border file:border-gray-300 file:rounded-lg file:bg-blue-100 file:text-blue-600"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={handlePostSubmit}
            >
              Post
            </button>
          </div>
        </form>

        <div className="posts flex flex-col gap-6">
          {posts?.map((post) => (
            <div
              key={post._id}
              className="postCard bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col gap-4"
            >
              <div className="userPostHead flex items-center gap-4">
                <img
                  src={`${BASE_URL}/${post.user.avatar}`}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {post.user.firstName} {post.user.lastName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {post.user.city}, {post.user.state}
                  </p>
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="text-gray-700">{post.description}</p>
                {post.image && (
                  <img
                    src={`${BASE_URL}/${post.image}`}
                    alt="Post"
                    className="mt-4 rounded-lg max-w-full"
                  />
                )}
              </div>

              <div className="options flex gap-8 text-gray-600">
                <p
                  className="flex items-center gap-2 cursor-pointer hover:text-blue-500 "
                  onClick={() => handleLike(post._id)}
                >
                  {post.likes.includes(userInfo._id) ? (
                    <AiFillLike className="text-blue-500" />
                  ) : (
                    <AiOutlineLike />
                  )}
                  {post.likes?.length}
                </p>
                <p
                  className="flex items-center gap-2 cursor-pointer hover:text-blue-500"
                  onClick={() => openCommentsModal(post)}
                >
                  <FaRegComment />
                  {post.comments?.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block w-1/4"></div>

      {/* Comments Modal */}
      {isModalOpen && selectedPost && (
        <>
          <div className="fixed inset-0 bg-transparent bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white w-3/4 lg:w-1/3 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              <div className="commentsList max-h-64 overflow-y-auto mb-4">
                {selectedPost.comments?.map((comment) => (
                  <div
                    key={comment._id}
                    className="comment bg-gray-100 p-3 rounded-lg mb-2"
                  >
                    <p className="text-sm font-semibold text-gray-800">
                      {comment.user.firstName} {comment.user.lastName}
                    </p>
                    <p className="text-sm text-gray-600">{comment.text}</p>
                  </div>
                ))}
              </div>
              <textarea
                className="w-full h-20 p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg mb-4"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              ></textarea>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={closeCommentsModal}
                >
                  Close
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={handleAddComment}
                >
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Community
