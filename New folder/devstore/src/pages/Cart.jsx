import React from 'react'
import useCart from '../hooks/useCart'
import { toast } from 'react-toastify'

const Cart = () => {
  const {state,dispatch}=useCart()
  const {cart}=state

  const handleRemove=(products)=>{
   
      dispatch({type:"REMOVE_ITEM",payload:{id:products}})
      toast.success("add item to cart")
    }

    const handleIncrement=(products)=>{
   
      dispatch({type:"INCREMENT_ITEM",payload:{id:products}})
     
    }
  
    const handledecrement=(products)=>{
   
      dispatch({type:"DECREMENT_ITEM",payload:{id:products}})
    
    }
  

  return (
    <div className='container my-3'>
      <div className="row">
      {
        cart.length>0?(cart.map((item)=>(
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="card shadow p-3">
           <img src={item?.images?.[0]} className="card-img-top" alt="..." width={"100%"} height={"200px"} />
          <h5 className="card-title">{item?.title}</h5>
          <h5 className="card-title">{item?.quantity}</h5>
          <p className="card-text">{item?.price*item?.quantity}</p>
          <button  className="btn btn-primary" onClick={()=>handleRemove(item.id)}>remove</button>
          <button  className="btn btn-primary" onClick={()=>handleIncrement(item.id)}>+</button>
          <button  className="btn btn-primary" onClick={()=>handledecrement(item.id)}>-</button>
          </div>
          </div>

        ))):(<h1>empty cart</h1>)
      }
      </div>
    </div>
  )
}

export default Cart
