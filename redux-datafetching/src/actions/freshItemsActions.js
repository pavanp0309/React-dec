// action types
export const ADD_ITEM="ADD_ITEM"
export const REMOVE_ITEM="REMOVE_ITEM"


// actions 
export const addItem=(items)=>{
    console.log(items) //{type,payload}
    return{
        type:ADD_ITEM,
        payload:items.payload
    }
}

export const removeItem=()=>{
    return{
        type:REMOVE_ITEM
    }
}