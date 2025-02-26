import {useState,useEffect} from 'react'
import axios from 'axios';  
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id}=useParams()
  console.log(id)
  // store the Products Data
const [product,setProducts]=useState({})
console.log(product)
const {brand,title,description,stock,returnPolicy,price,images,category}=product
// const [image]=images
// let des=description.slice(0,50)

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
  return (
    <div>
      details
    </div>
  )
}

export default ProductDetails
