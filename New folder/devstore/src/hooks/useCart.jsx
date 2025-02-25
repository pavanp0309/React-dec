// CustomHook
import { ProductStore } from "../store/Appstore"

let useCart=(endpoint)=>{

    return useContext(ProductStore)
  }
export default useCart