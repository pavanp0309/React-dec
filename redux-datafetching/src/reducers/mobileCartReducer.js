import { ADD_ITEM,REMOVE_ITEM } from "../actions/freshItemsActions"
// initial state of the app
let mobileCartInitialState={
    mobileitems:100
}


// step3:Reducer functions
// (these are the only functions that can updated the store values)
// flow->user-> dispatch(action)-->reducers-->store--->ui
const mobileCartReducer=(state=mobileCartInitialState,action)=>{
  switch (action.type) {
    case ADD_ITEM: // type of action carried out by the user
       return {...state,mobileitems:state.mobileitems+action.payload}
    case REMOVE_ITEM:
    return {...state,mobileitems:state.mobileitems-action.payload}
    default:
        return state
  }
}

export default mobileCartReducer