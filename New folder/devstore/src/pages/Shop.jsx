import {useEffect,useState} from 'react'
import axios from 'axios';
import Card from "../components/common/Card"

const Shop = () => {
// store the Products Data
const [products,setProducts]=useState([])

const {products:p}=products;
console.log(p)
// useEffect for Fetching the Data from an APi
useEffect(()=>{
  // logic for fetching the Products
  const fetchProducts=async()=>{
   const data=await axios("https://dummyjson.com/products")
   setProducts(data.data)
  }

  // calling the functions
  fetchProducts()

  // cleanup function 
  return ()=>{}

},[])//updation : api call takes place only at intial render

  return (
    <div className='container my-2'>
      <div className="row g-3">
      {
       p?.map(ele=>(
       
          <Card  products={ele} key={ele.id}/>
       
       ))
      }
      </div>
    </div>
  )
}

export default Shop
