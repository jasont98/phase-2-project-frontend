import React from 'react'
import '../MainStyles.css'
import '../App.css'
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import '../3dTitle.css'
import '../About.css'

const Main = ({renderWeatherCards}) => {

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
        {/* <div className='3dContainer'>
          <div className='material'> */}
          <div className='infoTextHome-container'>
            <h2 className='infoTextHome'>WeatherSearch.React</h2>    
          </div>
          {/* </div>
        </div> */}
          <div className='homeBtn'>
            <Rotate> 🥶 </Rotate>
          </div>

          <div className="flexbox-container">
            {renderWeatherCards()}
          </div>
        </div>
    </div>
    </>
  )
}


export default Main;

