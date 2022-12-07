import React from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import SnowFall from 'react-snowfall';

const About = () => {

  const GlobalStyle = createGlobalStyle`
  .About {
    text-align: center;
    color: darkcyan;
    padding-top: 150px;
    padding-bottom: 50px;
    /* background-image: url("../public/sunset.jpg") */
  }

  body {
    color: darkcyan; 
    font-family: Tahoma;
    /* background-color: darkslateblue; */
    background-image: url("./snowy-landscape.jpg");
    image-resolution: 200dpi; 
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: cover;
    background-position: center
  }
`

  return (
    
    <>
      <GlobalStyle />
      <div className='About' style={{   position: '' }}>
      <SnowFall />
        <br></br>
        <br></br>
        <br></br>
        <h2 style={{color: 'darkcyan', fontFamily: 'Tahoma'} }>Weather Info Search</h2> 
      </div>
      <div>
       <h4>A simple app that allows the user to search thru different weathers of cities, and add those cities to a watchlist</h4>
       <p>Created by: William, Ian and Jason</p>
      <img></img>
      </div>
    </>
  )
}

export default About;