import React, { useState } from 'react'
import './community.css'
import {
  useCreatePostMutation,
  useGetPostsQuery,
} from './../../redux/api/postSlice'

const Community = () => {
  const [createPost] = useCreatePostMutation() // RTK Query mutation hook
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const { data: posts } = useGetPostsQuery()
  const handleFileChange = (e) => {
    setImage(e.target.files[0]) // Store the selected file
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault()

    if (!description.trim()) {
      alert('Description cannot be empty.')
      return
    }

    const formData = new FormData() // Use FormData for sending file and text data
    formData.append('description', description)
    if (image) formData.append('image', image)

    try {
      await createPost(formData).unwrap() // Call the createPost API
      setDescription('') // Clear the input field
      setImage(null) // Clear the file input
      alert('Post created successfully!')
    } catch (err) {
      console.error('Error creating post:', err)
      alert('Failed to create post.')
    }
  }
  console.log(posts)
  return (
    <div className="flex relative justify-center items-center my-20">
      <div className="w-[30%]"></div>
      <div className="w-[30%] flex flex-col gap-4">
        <form
          className="w-full flex flex-col gap-4"
          encType="multipart/form-data"
        >
          <textarea
            className="w-full p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-500"
            placeholder="What's on your mind?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div>
            <input
              type="file"
              className="border-2"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button
              className="border-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handlePostSubmit}
            >
              Post
            </button>
          </div>
        </form>
        <div className="posts"></div>
      </div>
      <div className="w-[30%]"></div>
    </div>
  )
}

export default Community
