// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import '../App.css';
import WeatherCard from './WeatherCard';
import Search from './Search';

function App() {

  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('denver');
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';
  const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  // console.log(city)

  useEffect(() => {
    fetch(queryURL)
      .then((r)=>r.json())
      .then((weather)=> 
      (setWeather(weather))
    );
  }, [city])
  // console.log(weather)
  
  return (
    <div>
      <Search onSubmitQuery={setCity} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;