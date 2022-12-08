import React, {useEffect, useState} from 'react';
import SnowFall from 'react-snowfall';
import {createGlobalStyle} from "styled-components";
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import WeatherCard from './WeatherCard'
import "../App.css" 
import Main from './Main.jsx'

const Home = ({ displayedCitys, weatherIcon }) => {

  const [weatherObjs, setWeatherObjs] = useState([]);
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';

  const createSavedCitys = () => {
    return displayedCitys.map((displayedCity) => {
      return ( 
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${displayedCity.name}&appid=${APIKey}`)
      .then((r)=>r.json())
      .then((weatherObj)=> {
        setWeatherObjs(weatherObjs => [...weatherObjs, weatherObj])
      }
    ))})
  }

  useEffect(() => {createSavedCitys();
  }, [displayedCitys])

  const renderWeatherCards = () => {
    return weatherObjs.map((weatherObj) => {
      console.log(weatherObj)
      return (
        <WeatherCard weather={weatherObj} weatherIcon={weatherIcon} />
      )})
    }
  

//   const images = ["./snow-city.jpg", "./rainy-day.jpg", "./sunny-field.jpg", "./clear-night.jpg"]

//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//         if(currentIndex === images.length - 1) {
//             setCurrentIndex(0);
//         } 
//         else {
//              setCurrentIndex(currentIndex + 1);
//         }
//     }, 3000)
    
//     return () => clearInterval(intervalId);
// }, [])

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
    /* background-image: url("./snow-city.jpg");  */
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
  
  // BOUNCE ANIMATION
  .homeBtn:hover {
    transform: scale(1.5);
    cursor: pointer;
    animation-name: bounce;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -moz-animation-name: bounce;
  }

  // BOUNCE ANIMATION
  .weather-card:hover {
    animation-name: bounce;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.9s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -moz-animation-name: bounce;
  }

  .main {
    width: 100%;
    height: 100vh;
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

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 4.2rem;
    transition: transform 500ms; 
    
    transform: translateY(-10px);
  `

  return (
    <>
    <GlobalStyle />
    <div className='About' style={{ position: '' }}>
    <SnowFall />
    <Main renderWeatherCards={renderWeatherCards()}/>  
    </div>
    <div className="cardDifs">
      {/* <img src={images[currentIndex]} /> */}
    </div>
    <div className="flexbox-container">
      {renderWeatherCards()}
    </div>
    </>
  )
}

export default Home;