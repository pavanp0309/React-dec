import React from 'react'
// Programatic navigation
import { useNavigate } from 'react-router-dom'

const TrendingCourses = () => {
  // useNaviagte Hook  which helps in navigate to different pages  abse user interactions
  let navigate=useNavigate()
  // navigate is the function Returned by useNavigate 
  return (
    <div>
       <button className='btn btn-outline-warning' onClick={()=>navigate('/services')}>Back to services</button>
    </div>
  )
}

export default TrendingCourses
