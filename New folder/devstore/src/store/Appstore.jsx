import { useState,useEffect,createContext,useContext,useReducer } from "react"
import { initialState } from "../services/CartReducer"

// step1: creating the Store for the Products
export const ProductStore=createContext()

const Appstore = ({children}) => {
//   logic for data (useReducer Hook)
const [state,dispatch]=useReducer(reducer,initialState)

// useEffect for Handling the sideEffect caused while updatind delteing adding rendering of the store
useEffect(()=>{
//  logic    --Mouting phase
localStorage.setItem("cart",JSON.stringify(state.cart))

return ()=>{} //unmounting phase

},[state.cart])//updation Phase


  return (
    <ProductStore.Provider value={{state,dispatch}}>
        {children} {/* Rendering child elements */}
    </ProductStore.Provider>
  )
}

export default Appstore




