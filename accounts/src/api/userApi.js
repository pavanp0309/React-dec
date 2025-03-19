// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => `users`,
      }),
      getUsersId: builder.query({
        query: (id) => `users/${id}`,
      }),
    }),
  })


export  const {useGetUsersQuery,useGetUsersIdQuery}=userApi
