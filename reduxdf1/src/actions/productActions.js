import axios from "axios";

// step3: creating the action Types
export const FETCH_REQ = "fetch_req";
export const FETCH_REQ_SUCCESS = "fetch_req_success";
export const FETCH_REQ_FAIL = "fetch_req_fail";

// step4: creating the actions
export const fetchProductreq = () => {
  // initaill request for fetching the products
  return {
    type: FETCH_REQ,
  };
};

export const fetchProductSuccess = (products) => {
  console.log("products-success:", products);
  return {
    type: FETCH_REQ_SUCCESS,
    payload: products,
  };
};

export const fetchProductfail = (error) => {
  console.log("products-error:", error);
  return {
    type: FETCH_REQ_FAIL,
    payload: error,
  };
};

// logic for fetching the Data
export function fetchProducts() {
  return function (dispatch) {
    dispatch(fetchProductreq()); //intial req for fetching the products
    axios.get("https://fakestoreapi.com/products")
      .then((products) => {
        let prod = products.data;
        dispatch(fetchProductSuccess(prod)); //action after fetching the Products
      })
      .catch((err) => {
        let errmsg = err.message;
        dispatch(fetchProductfail(errmsg)); // action after failer
      });
  };
}

// fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(products=>products)
