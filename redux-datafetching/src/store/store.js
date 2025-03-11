import { createStore,combineReducers } from "redux";
import freshCartReducer from "../reducers/freshCartReducer.js"
import mobileCartReducer from "../reducers/mobileCartReducer.js";


const rootReducer=combineReducers({freshCartReducer,mobileCartReducer})
// step1:creation of store for an entire app;
const store=createStore(rootReducer)

export default store;