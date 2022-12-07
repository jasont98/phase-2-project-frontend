import React from 'react'
import WeatherCard from './WeatherCard'

const Home = ({ weather }) => {
  return (
    <div class="flexbox-container">
      <WeatherCard weather={weather} />
      <WeatherCard weather={weather} />
      <WeatherCard weather={weather} />
    </div>
  )
}

export default Home