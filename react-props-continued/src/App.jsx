import React from 'react'
import ProfileCard from './components/ProfileCard'
import ServiceCard from './components/ServiceCard'
import Dashboard from './components/Dashboard'

// parent component
const App = () => {
  // function to handle the logout
  const handleLogout=()=>{
    alert("logged out")
  }

  return (
    <div className='container'>
      {/* passing the Different Props to Profile Card */}
      {/* <ProfileCard 
       className="hello"
       imageUrl='./src/assets/react.svg' // string format 
       mobile// number 
       colors={["red","green","blue"]} //array
       isonline={true} //boolean 
       details={{name:"Raju"}}// object
       logout={handleLogout}//function 
       style={{color:"red",borderRadius:"5px"}}
      /> */}


{/*  child component */}
      {/* <ServiceCard name="gold"><span>hello</span></ServiceCard> */}
    
    
    {/* conditional rendering */}
    <Dashboard/>
    
    </div>
  )
}

export default App
