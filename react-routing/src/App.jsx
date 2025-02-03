import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
   
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      {/* error handling  */}
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
   
     
    </>
  )
}

export default App
