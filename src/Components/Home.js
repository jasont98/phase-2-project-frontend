import React, {useEffect, useState} from 'react';
import {createGlobalStyle} from "styled-components";
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

const GlobalStyle = createGlobalStyle`

    .About {
      padding-top: 90px;
    }

  body {

    color: darkcyan; 
    font-family: Tahoma;
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
`

  return (
    <>
    <GlobalStyle />
    <div className='About'>
    <Main renderWeatherCards={renderWeatherCards} weatherIcon={weatherIcon} displayededCitys={displayedCitys}/>  
    </div>
    </>
  )
}

export default Home;