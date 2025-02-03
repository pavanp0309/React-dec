import React from "react";
// import { Navbar } from "./components/Navbar";
import Navbar from "./components/Navbar";


const App=()=>{
  function Example(e){
   alert("doubt",e)
  }
  return(
    <>
 <div  className="layout bg-primary rounded-circle"  >
 <Navbar  className="nav-1" d={"kk"} e="default props"  ex={Example}/>
 <Navbar data="hello" className="nav-1" d={"kk"}  />
 {/* <Navbar  data={"Sidenav-2"} className="nav-2" /> */}
 </div>
 <div className="card-container">
 <div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>

    </>
  )
}

export default App