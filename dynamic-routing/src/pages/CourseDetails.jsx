import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import Data from '../data/data'



const CourseDetails = () => {
    const {id}=useParams()

    let course=Data.find(c=>c.id===parseInt(id))
    let navigate=useNavigate()
    
  return (
    <div>
        <h1>Details</h1>
       <p>{course.title}</p>
       <p>{course.price}</p>
       <p>{course.duration}</p>
       <p>{course.level}</p>
       <p>{course.category}</p>
       <button onClick={()=>navigate('/')}>Back home</button>
      
    </div>
  )
}

export default CourseDetails
