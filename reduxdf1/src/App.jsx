import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from './actions/productActions'


const App = () => {


const dispatch=useDispatch()
let loading=useSelector(state=>console.log("l",state))
let products=useSelector(state=>state.products)
let isError=useSelector(state=>console.log("e",state))

// dispacting an action to fetch the products
useEffect(()=>{
  dispatch(fetchProducts())
},[dispatch])


  return (
    <div>
      {products.map((ele)=><h1>{ele.title}</h1>)}
    </div>
  )
}

export default App
