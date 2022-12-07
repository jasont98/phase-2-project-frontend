import React from 'react'
import { NavLink } from "react-router-dom"
import "./navBar-style.css"
const NavBar = () => {
  return (
    <div className="navBar">
      <h1 className="logostyle">My Weather App ⛈ 🌞</h1>
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
