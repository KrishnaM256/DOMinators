import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    images: [{ type: String }], // URLs of uploaded images
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // List of user IDs
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)

export default Post
