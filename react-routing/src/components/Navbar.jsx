import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

     <ul class="nav justify-content-center">
  <li class="nav-item">
    <NavLink class="nav-link " to={'/'} >Home</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to={'/about'} >About</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to={'/contact'} >Contact</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link " to={'/services'}>services</NavLink>
  </li>
</ul>
 
  )
}

export default Navbar
