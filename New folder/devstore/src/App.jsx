import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './components/authentication/Login'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        {/* dynamic Route */}
        <Route path='/shop/:id' element={<ProductDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* error handling */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
