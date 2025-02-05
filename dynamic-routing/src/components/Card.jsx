import React from 'react'

const Card = ({title,price,duration, level,category}) => {
  return (
    <div className='card shadow border mx-1'>
     <h3 className="card-title">{title}</h3>
     <h3 className="card-title">{price}</h3>
    </div>
  )
}

export default Card
