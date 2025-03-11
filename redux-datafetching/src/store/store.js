import { createStore } from "redux";
import freshCartReducer from "../reducers/freshCartReducer.js"

// step1:creation of store for an entire app;
const store=createStore(freshCartReducer)

export default store;