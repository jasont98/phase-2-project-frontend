import React from 'react'
import SnowFall from 'react-snowfall'
import {createGlobalStyle, ThemeProvider} from "styled-components"

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


  return (
    <>
    <GlobalStyle />
    <div className='About' style={{ position: '' }}>
    <SnowFall />
      <br></br>
      <br></br>
      <br></br>
       <h2 style={{color: 'darkcyan', fontFamily: 'Tahoma'} }>Home</h2> 
    </div>
    </>
  )
}

export default Home