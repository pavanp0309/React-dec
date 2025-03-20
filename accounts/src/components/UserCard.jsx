import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = (props) => {
  const  {name,id, username,email,phone}=props.user

  if(!username)return <h1>loading..</h1>

  return (
    <div className="card">
   <Link to={`/user/${id}`}>
     <img src={`https://api.dicebear.com/7.x/avataaars/svg?speed=${username}`} className="card-img-top" alt="..." style={{width:"100%",height:"100px"}}/>
   </Link>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{username}</p>
      <p className="card-text">{email}</p>
      <p className="card-text">{phone}</p>
      <div className="card-footer">
        <i className="bi bi-heart"></i>
        <i className="bi bi-pencil"></i>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  </div>
  )
}

export default UserCard
