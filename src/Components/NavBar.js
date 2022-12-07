import React from 'react'
import { NavLink } from "react-router-dom"
import "./navBar-style.css"
const NavBar = () => {
  return (
    <div className="navBar">
      <h1 className="logostyle">My Weather App 🌞</h1>
      
    <NavLink className="navItem"
    to="/" exact>
      Home
    </NavLink>
    <NavLink className="navItem"
    to="/about" exact>
      About
    </NavLink>
    <NavLink className="navItem"
    to="/search" exact>
      Search
    </NavLink>
    <NavLink className="navItem"
    to="/watchlist" exact>
      My Weather
    </NavLink>
  </div>)

}

export default NavBar;
