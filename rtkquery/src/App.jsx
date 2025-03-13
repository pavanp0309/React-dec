import React from 'react'
import { useGetPostsQuery, useGetUsersQuery } from './services/todo'

function App() {
  const {data:posts,isLoading,isError}=useGetPostsQuery()
  const {data:user,isLoading:l,isError:e}=useGetUsersQuery()
  console.log(posts)
  console.log(user)
  if(isLoading)return <h1>loading...</h1>
  if(isError)return <h1>error...</h1>
  return (
    <div className=''>
      <h1>posts</h1>
      <ul>
        {posts.map((post)=>(
          <li>{post.title}</li>
        ))}
      </ul>
      <ul>
        {user.map((u)=>(
          <li>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
