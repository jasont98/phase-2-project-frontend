import React, {useEffect, useState} from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import SnowFall from 'react-snowfall';
import '../About.css'


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
          <h2 className='infoText'>My Weather App</h2> 
          <h1 className='infoText2'>A simple app that allows the user to search for any city in the world for the current weather, and add those cities to a watchlist</h1>
          <h2 className='infoText2'>Created by: William, Ian and Jason</h2>
          <h3 className='infoText3'>Powered by: React and Coffee</h3>
        </div>

      </div>
    </>
  )
}

export default About;