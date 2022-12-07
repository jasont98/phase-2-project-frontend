import React from 'react'
import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <div >
    <NavLink 
    to="/" exact>
      Home
    </NavLink>
    <NavLink 
    to="/about" exact>
      About
    </NavLink>
    <NavLink 
    to="/search" exact>
      Search
    </NavLink>
    <NavLink 
    to="/watchlist" exact>
      My Weather
    </NavLink>
  </div>)
}

export default NavBar;
