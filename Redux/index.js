// step1: import the store from redux
let {createStore, combineReducers}=require("redux")


// initial state of the app 
let initialstate={
    icecreams:100,
    chips:100

}

// step4: creating the actions
const BuyIceCream=()=>{
    return{
        type:"Buy_Icecream"
    }
}

// step3: creating the Reducer
const iceCreamReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "Buy_Icecream":
            return {...state,icecreams:state.icecreams-1,chips:state.chips-1}
        default:
            return state
    }

}



// step2:creating the store --single source of truth
let store=createStore(iceCreamReducer)
store.subscribe(()=>console.log(store.getState()))
store.dispatch(BuyIceCream())
store.dispatch(BuyIceCream())
store.dispatch(BuyIceCream())
store.dispatch(BuyIceCream())
store.dispatch(BuyIceCream())
