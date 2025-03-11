// action types
export const ADD_ITEM="ADD_ITEM"
export const REMOVE_ITEM="REMOVE_ITEM"


// actions 
export const addMobileItem=(items)=>{
    console.log(items)
    return{
        type:ADD_ITEM,
        payload:items.payload
    }
}

export const removeMobileItem=()=>{
    return{
        type:REMOVE_ITEM
    }
}