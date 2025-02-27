import {useState,useEffect} from 'react'
import axios from 'axios';  
import { useParams } from 'react-router-dom'
import useCart from '../hooks/useCart';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const {id}=useParams()
  console.log(id)
  // store the Products Data
const [product,setProducts]=useState({})
console.log(product)
const {brand,title,description,stock,returnPolicy,price,images,category}=product


// useEffect for Fetching the Data from an APi
useEffect(()=>{
  // logic for fetching the Products
  const fetchProducts=async()=>{
   const data=await axios(`https://dummyjson.com/products/${id}`)
   console.log(data)
   setProducts(data.data)
  }

  // calling the functions
  fetchProducts()

  // cleanup function 
  return ()=>{}

},[id])//updation : api call takes place only at intial render



const {dispatch}=useCart()

const handleAddCart=(product)=>{
  dispatch({type:"ADD_TO_CART",payload:product})
  toast.success("add item to cart")
}

  return (
    <div className="card my-3 mx-2" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={images?.[0]} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{brand}</p>
          <p className="card-text">{category}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">{returnPolicy}</p>
          <p className="card-text">{stock}</p>
          <button  className="btn btn-primary" onClick={()=>handleAddCart(product)}>addtocart</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails
