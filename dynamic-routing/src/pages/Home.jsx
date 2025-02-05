import React from 'react'
import Data from '../data/data'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card'


const Home = () => {
  return (
    <div className='container'>
       <h1 className='text-center fw-bold  text-success'>TOP COURSES</h1>
       <div className="row ">
       {
       Data.map((ele,index)=>(
         <NavLink className='nav-link col-12 col-sm-12 col-md-4 col-lg-4' 
         key={ele.id} to={`/${ele.id}`} >
         <Card  
         title={ele.title} 
         price={ele.price}
         duration={ele.duration}
         level={ele.level}
         category={ele.category}/>
         </NavLink>
        ))
       }
       </div>
    </div>
  )
}

export default Home
