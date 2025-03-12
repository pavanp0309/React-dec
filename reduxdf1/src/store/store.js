import { createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import ProductReducer from "../reducers/productReducer";


// for multiple reducer setup(optinal :when we have multiple reducer we use it)
let rootReducer=combineReducers({})

// step1:
// Store for entire app 
const store=createStore(ProductReducer,applyMiddleware(thunk))

export default store;