import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
   // useNaviagte Hook  which helps in navigat to different pages  abse user interactions
   let navigate=useNavigate()
  return (
    <div>
     <button className='btn btn-outline-warning' onClick={()=>navigate('/courses')}>Back to courses</button>
    </div>
  )
}

export default Services
