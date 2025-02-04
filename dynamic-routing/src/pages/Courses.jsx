import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Courses = () => {
  return (
    <div className='d-flex justify-content-center'>
      <NavLink  
      to={'/courses/featured'} 
      className={"nav-link mx-2 text-primary bg-warning p-2 rounded"}>FeaturesCourses</NavLink>
      <NavLink 
      to={'/courses/trending'}  
      className={"nav-link mx-2 text-primary bg-warning p-2 rounded"} >TrenddingCourses</NavLink>
     <Outlet/>
    </div>
  )
}

export default Courses
