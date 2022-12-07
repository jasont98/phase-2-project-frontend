import React, { useEffect, useState } from 'react';
import SnowFall from 'react-snowfall';
import {createGlobalStyle} from "styled-components";
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import WeatherCard from './WeatherCard'

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
      text-align: center;
      color: darkcyan;
      padding-top: 80px;
    }

    body {
      color: darkcyan; 
      font-family: Tahoma;
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
    
    <div className="flexbox-container">
      {renderWeatherCards()}
    </div>
    </>
  )
}

export default Home;