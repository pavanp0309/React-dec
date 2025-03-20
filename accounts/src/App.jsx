import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserList from './components/UserList'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UserDeatils from './components/UserDeatils'

const App = () => {


  return (
  <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/user" element={<UserList/>}/>
    {/* dynamic routiasdng */}
    <Route path="/user/:userId" element={<UserDeatils/>}/>
   </Routes> 
  </>
  )
}

export default App
