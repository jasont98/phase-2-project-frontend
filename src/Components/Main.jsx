import React from 'react'
// import video from '.../public/sunset_clouds.mp4'
import '../MainStyles.css'
import '../App.css'
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const Main = ({renderWeatherCards, weatherIcon, displayedCitys}) => {

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
    <div className='main'>
        <video src={`./sunset_clouds.mp4`} autoPlay loop muted/>
        <div className='content'>
          {/* <h1>Welcome from Main!</h1> */}
          <div className='homeBtn'>
            <Rotate> 🥶 </Rotate>
          </div>
          <h2 style={{color: 'darkcyan', fontFamily: 'Tahoma'}} className="homeBtn">Home</h2>        
          <br></br>
          <div className="flexbox-container">
            {renderWeatherCards()}
          </div>
        </div>
    </div>
    </>
  )
}

export default Main;