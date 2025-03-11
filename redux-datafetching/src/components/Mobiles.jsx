import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ADD_ITEM,addItem } from '../actions/freshItemsActions'

const Mobiles = () => {
    const items=useSelector(state=>state.freshitems) // it subscribsse to the store state value
 console.log(items)

//  function to dispatch actions
let dispatch=useDispatch()

    return (
    <div>
      <h1>{items}</h1>
      <button onClick={()=>dispatch(addItem({type:ADD_ITEM,payload:2}))}>addItem</button>
    </div>
  )
}

export default Mobiles
