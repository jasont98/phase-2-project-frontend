import React, {useEffect, useState} from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import SnowFall from 'react-snowfall';

const About = () => {

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
//     }, 100)
    
//     return () => clearInterval(intervalId);
// }, [])

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
    background-color: darkslateblue;
    /* background-image: url([currentIndex]); */
    image-resolution: 300dpi; 
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: cover;
    background-position: center
  }

  .hoverAbout:hover {
    transform: scale(1.5);
    cursor: pointer;
    animation-name: bounce;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -moz-animation-name: bounce;
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
        <h2 className='hoverAbout'style={{color: 'darkcyan', fontFamily: 'Tahoma'} }>My Weather App</h2> 
      </div>
      <div>
       <h4 className='hoverAbout'>A simple app that allows the user to search thru different weathers of cities, and add those cities to a watchlist</h4>
       <p className='hoverAbout'>Created by: William, Ian and Jason</p>
      {/* <div className="cardDifs">
      <img className="imageDifs"src={images[currentIndex]} />
    </div> */}
      {/* <img></img> */}
      </div>
    </>
  )
}

export default About;