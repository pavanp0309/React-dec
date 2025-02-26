// CustomHook
import { useContext } from "react"
import { ProductStore } from "../store/Appstore"

let useCart=()=>{

    return useContext(ProductStore)
  }
export default useCart