import { FETCH_REQ, FETCH_REQ_FAIL, FETCH_REQ_SUCCESS } from "../actions/productActions";

let initialState = {
  products: [],
  isLoading: false,
  iserror: "",
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQ:
      return{...state,isLoading:true};
    case FETCH_REQ_SUCCESS:
      return {...state,isLoading:false,products:action.payload, iserror:""};
    case FETCH_REQ_FAIL:
      return {...state,isLoading:false,products:[], iserror:action.payload};

    default:
      return state;
  }
};

export default ProductReducer