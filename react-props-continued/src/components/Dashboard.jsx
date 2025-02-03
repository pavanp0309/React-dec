
import React from 'react'

const Dashboard = () => {
let logged=true;
// var message
// if(logged){
//     return<h1>Welcome User</h1> 
// }else {
//     return<h1>Welcome Guest</h1> 
// }

// if(logged){
//     message=
// }else {
//     message=<h1>Welcome Guest</h1> 
// }
  return(
    <>
    {/* {message} */}
    {logged?<h1>Welcome User</h1> :<h1>Welcome Guest</h1> }
    {/* &&-shortcircuting */}
    {!!logged&&<h1>Welcome User</h1>}
    </>
  )
 
}

export default Dashboard
