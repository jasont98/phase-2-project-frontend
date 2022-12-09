import React from 'react'
import { NavLink } from "react-router-dom"
import "../navBar-style.css"

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink id="globelogo" to="/" className="logostyle" exact>WeatherSearch.React 
      🌍
      </NavLink>
    <NavLink className="navItem"
    to="/search" exact>
      Search
    </NavLink>
    <NavLink className="navItem"
    to="/watchlist" exact>
      My Weather
    </NavLink>
    <NavLink className="navItem"
    to="/about" exact>
      About
    </NavLink>
  </div>
  )
}

export default NavBar;
