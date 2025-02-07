import React from 'react'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    {/* Implementing the Routing Structure */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Product/>} />
      {/* Error Handling */}
      <Route path='*' element={<PageNotFound/>} />

    </Routes>
    </>
  )
}

export default App
