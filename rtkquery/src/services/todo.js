// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',//these unique name/key for reducer
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),//api-baseusrl
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,//endpoint
    }),
    getPostById: builder.query({
        query: (id) => `/posts/${id}`,//endpoint
      }),
    getTodos: builder.query({
        query: () => `/todos`,
      }),
    getUsers: builder.query({
        query: () => `/users`,
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery,
    useGetUsersQuery,
    useGetPostByIdQuery,
    useGetTodosQuery } = todoApi