import React, {useEffect, useState} from 'react';
import SnowFall from 'react-snowfall';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import WeatherCard from './WeatherCard'

const Home = ({ weather1, weather2, weather3 }) => {

  const images = ["./snow-city.jpg", "./rainy-day.jpg", "./sunny-field.jpg", "./clear-night.jpg"]

  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } 
        else {
             setCurrentIndex(currentIndex + 1);
        }
    }, 2000)
    
    return () => clearInterval(intervalId);
}, [])

  const GlobalStyle = createGlobalStyle`
  .About {
    text-align: center;
    color: darkcyan;
    padding-top: 80px;
  }

  body {
    color: darkcyan; 
    font-family: Tahoma;
    background-color: darkslateblue;
    background-image: url("./snow-city.jpg"); 
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: cover;
    background-position: center
    // flexbox or css grid
    // mediaQuery
  }
  .cardDifs {
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
  padding: 2rem 1rem;
  font-size: 4.2rem;
`;

  return (
    <>
    <GlobalStyle />
    <div className='About' style={{ position: '' }}>
    <SnowFall />
      <br></br>
      <br></br>
    <Rotate> 🥶 </Rotate>
      <br></br>
       <h2 style={{color: 'darkcyan', fontFamily: 'Tahoma'} }>Home</h2> 
    </div>
    <div className="cardDifs">
      <img src={images[currentIndex]} />
    </div>
    
    <div className="flexbox-container">
      <WeatherCard weather={weather1} />
      <WeatherCard weather={weather2} />
      <WeatherCard weather={weather3} />
    </div>
    </>
  )
}

export default Home;