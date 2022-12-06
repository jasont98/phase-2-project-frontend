import React, { useEffect, useState } from 'react';
import '../App.css';
import WeatherCard from './weatherCard';

function App() {

  const [weather, setWeather] = useState({})

  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';

  const city = 'colorado'

  const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  useEffect(() => {
    fetch(queryURL)
    .then(r=>r.json())
    .then((weather)=>setWeather(weather))
  }, [])
  
  console.log(weather)

  return (
    <div>
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
