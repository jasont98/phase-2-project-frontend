// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import '../App.css';
import WeatherCard from './weatherCard';
import Search from './Search';

function App() {

  const [weather, setWeather] = useState([]);

  useEffect(() => {

  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';

  const city = 'tokyo'
  
  const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL)
      .then((r)=>r.json())
      .then((weather)=> 
      (setWeather(weather))
    );
  }, [])
  
  console.log(weather)

  return (
    <div>
      <Search />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;


 //fetch before populating react elements?