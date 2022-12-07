import React from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import SnowFall from 'react-snowfall';

const About = () => {

  const GlobalStyle = createGlobalStyle`
  .About {
    text-align: center;
    color: darkcyan;
    padding-top: 150px;
  }

  body {
    color: darkcyan; 
    font-family: Tahoma;
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
      </div>
    </>
  )
}

export default About;