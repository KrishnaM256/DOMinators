import { apiSlice } from './apiSlice'
import { POSTS_URL } from '../constants'

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: `${POSTS_URL}`,
        method: 'POST',
        body: data,
        credentials: 'include', // Include credentials if necessary
      }),
      invalidatesTags: ['Post'], // Invalidate Post cache after creating a post
    }),
    getPosts: builder.query({
      query: () => ({
        url: `${POSTS_URL}`,
        credentials: 'include',
      }),
      providesTags: ['Post'], // Provide Post tags for cache management
      keepUnusedDataFor: 5, // Keep unused data for 5 seconds
    }),
    likePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}/like`,
        method: 'PUT',
        credentials: 'include',
      }),
      invalidatesTags: ['Post'], // Invalidate Post cache after liking/unliking
    }),
    addComment: builder.mutation({
      query: ({ postId, text }) => ({
        url: `${POSTS_URL}/${postId}/comment`,
        method: 'POST',
        body: { text },
        credentials: 'include',
      }),
      invalidatesTags: ['Post'], // Invalidate Post cache after adding a comment
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Post'], // Invalidate Post cache after deletion
    }),
    getPostDetails: builder.query({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5, // Keep unused data for 5 seconds
    }),
  }),
})

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useLikePostMutation,
  useAddCommentMutation,
  useDeletePostMutation,
  useGetPostDetailsQuery,
} = postsApiSlice
