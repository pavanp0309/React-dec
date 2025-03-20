import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUsersIdQuery } from '../api/userApi'

const UserDeatils = () => {
  const {userId}=useParams()
  console.log(userId)
const {data,isLoading,isError}=useGetUsersIdQuery(userId)
if(isLoading)return <h1>loading...</h1>

  return (
 <div className="container d-flex justify-center align-items-center h-100">
     <div className='card p-3 shadow bg-warning border border-danger'>
     <h3>Name:{data.name}</h3>
     <h3>UserName:{data.username}</h3>
     <h3>Email:{data.email}</h3>
     <h3>Phone:{data.phone}</h3>
     <h3>City:{data.address.city }</h3>
     <h3>Website:{data.website }</h3>
     <h3>CompanyName:{data.company.name }</h3>
    </div>
 </div>
  )
}

export default UserDeatils
