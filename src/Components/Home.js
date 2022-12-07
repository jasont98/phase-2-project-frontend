import React from 'react'
import SnowFall from 'react-snowfall'
import {createGlobalStyle, ThemeProvider} from "styled-components"
import { keyframes } from 'styled-components'
import styled from 'styled-components'

const Home = () => {
  const GlobalStyle = createGlobalStyle`
  .About {
    text-align: center;
    color: darkcyan;
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

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
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
    </>
  )
}

export default Home