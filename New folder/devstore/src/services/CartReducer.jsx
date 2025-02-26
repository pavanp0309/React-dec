
export let initialState={
    cart:JSON.parse(localStorage.getItem("cart"))||[]
}

const CartReducer=(state,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
        case "REMOVE_ITEM":
        case "INCREMENT_ITEM":
        case "DECREMENT_ITEM":
        case "CART_TOTAL":
            
          
    
        default:
           return state
    }

}

export default CartReducer