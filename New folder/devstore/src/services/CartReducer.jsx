export let initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let existingItem = state.cart.find((item) => item.id === action.payload.id);
      console.log(existingItem);
      if(existingItem){
        return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
      } else{
        return {...state,cart:[...state.cart,{...action.payload,quantity:1}]}
      }

    case "REMOVE_ITEM":
        return {...state,cart:state.cart.filter((item)=>(item.id !== action.payload.id))}
    case "INCREMENT_ITEM":
        return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
    case "DECREMENT_ITEM":
         return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity-1}:item))}
    case "CART_TOTAL":

    default:
      return state;
  }
};

export default CartReducer;
