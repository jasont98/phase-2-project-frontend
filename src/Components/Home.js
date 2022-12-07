import React from 'react'
import WeatherCard from './WeatherCard'

const Home = ({ weather1, weather2, weather3 }) => {
  return (
    <div className="flexbox-container">
      <WeatherCard weather={weather1} />
      <WeatherCard weather={weather2} />
      <WeatherCard weather={weather3} />
    </div>
  )
}

export default Home