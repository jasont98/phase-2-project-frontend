import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

export const CardList = ({ savedCity }) => {

  const [weather4, setWeather4] = useState([]);
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';

  console.log(savedCity?.[0]?.name)

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${savedCity[0]?.name}&appid=${APIKey}`)
      .then((r)=>r.json())
      .then((weather4)=> 
      (setWeather4(weather4))
    );
  }, [])
  
  return (
    <div className="saved-container">

      <WeatherCard weather={weather4} />
    </div>
  )
}

export default CardList;