import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import { toast } from 'react-toastify'

const Card = ({products}) => {
  console.log(products)
  const {id,images, title, description ,price}=products
  const [image]=images
  let des=description.slice(0,50)

  const {dispatch}=useCart()

  const handleAddCart=(products)=>{
    dispatch({type:"ADD_TO_CART",payload:products})
    toast.success("add item to cart")
  }

 
  return (
    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
<div className="card shadow" >
  <Link to={`/shop/${id}`} >
  <img src={image} className="card-img-top" alt="..." width={"100%"} height={"200px"} />
  </Link>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{des}</p>
      <p className="card-text">{price}</p>
      <button  className="btn btn-primary" onClick={()=>handleAddCart(products)}>addtocart</button>
    </div>
  </div>
    </div>
  )
}

export default Card
