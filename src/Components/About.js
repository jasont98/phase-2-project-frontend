import React, {useEffect, useState} from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import SnowFall from 'react-snowfall';


const About = ({ isDusk, handleSwitch }) => {

  return (
    <>
        <div className={ isDusk ? 'dusk' : 'dawn' }> 
          <div className='switchDiv' id='somshit'>
            <label className="switch">
              <input type="checkbox" onChange={handleSwitch} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      <SnowFall /> 
      <div className='about-container'>
        <div className={ isDusk ? 'about-container' : 'about-container1' }>
          <h2>Weather Info Search</h2> 
            <h4>A simple app that allows the user to search thru different weathers of cities, and add those cities to a watchlist</h4>
          <p>Created by: William, Ian and Jason</p>
        </div>

      </div>
    </>
  )
}

export default About;