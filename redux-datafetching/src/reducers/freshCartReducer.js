import { ADD_ITEM,REMOVE_ITEM } from "../actions/freshItemsActions"
// initial state of the app
let freshCartInitialState={
    freshitems:100
}


// step3:Reducer functions
// (these are the only functions that can updated the store values)
// flow->user-> dispatch(action)-->reducers-->store--->ui
const freshCartReducer=(state=freshCartInitialState,action)=>{
  switch (action.type) {
    case ADD_ITEM: // type of action carried out by the user
       return {...state,freshitems:state.freshitems+action.payload}
    case REMOVE_ITEM:
    return {...state,freshitems:state.freshitems-action.payload}
    default:
        return state
  }
}

export default freshCartReducer