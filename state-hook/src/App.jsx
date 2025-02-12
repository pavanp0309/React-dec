import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ProfileCard from './pages/ProfileCard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProfileCard/>} />
      </Routes>
    </>
  )
}

export default App
