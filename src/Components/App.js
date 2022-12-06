import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import WeatherCard from './WeatherCard';

function App() {

  const [weather, setWeather] = useState([])

  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';

  const city = 'colorado'

  const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
    fetch(queryURL)
    .then(r=>r.json())
    .then((weather)=>setWeather(weather))}
    renderAfterCalled.current = true;

  }, [])
  
  console.log(weather)

  return (
    <div>
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
