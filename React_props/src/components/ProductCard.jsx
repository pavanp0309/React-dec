import React from 'react'

const ProductCard = ({className,src,price, weights,isAvailable}) => {
  // const {className}=props //one way
  // const weight=weights?.weights || "hello"
    return (
    <div className={className} style={{display:isAvailable?"block":"none"}}>
      <img src={src} alt="" />
      <div className="card-body">
        <p className='card-text'>Price:${price}</p>
        {/* <p className='card-text'>{weights}</p> */}
      </div>
    </div>
  )
}

export default ProductCard
