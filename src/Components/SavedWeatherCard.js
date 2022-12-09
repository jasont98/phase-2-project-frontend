import { Card } from 'semantic-ui-react'
import React, {useState, useEffect} from 'react';

function SavedWeatherCard({ savedCity, handleDelete }) {
  // const { id, date, description, category, amount } = weather;
  const [weather, setWeather] = useState({});
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';

  useEffect(()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${savedCity.name}&appid=${APIKey}`)
    .then(r=>r.json())
    .then(setWeather)
  }, [savedCity])

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/saved-cities/${savedCity.id}`, {method: "DELETE"})
      .then((r)=>r.json())
      .then(()=>{
        handleDelete(savedCity)
      })
  }

  const temperatureConverter = (valNum) => {
    valNum = parseFloat(valNum);
    return (((valNum-273.15)*1.8)+32).toFixed(0);
  }
  

  return (
    <div className="weather-card">
      <Card className="ui-raised-card" >
        <Card.Content>
          <Card.Header className="header">{weather.name}</Card.Header>
            <h3>Country: {weather.sys?.country}</h3>
            <h3>Feels like: {temperatureConverter(weather.main?.feels_like)}ºF</h3>
            <h3>vibes: {weather.weather?.[0].description}</h3>
            <img src={`./images/${weather.weather?.[0].description}.svg`} alt={weather.name}></img>
            <h3>cloudy: {weather.clouds?.all}%</h3>
            <button className='buttonSize' onClick={handleDeleteClick}>delete</button>
        </Card.Content> 
      </Card>
    </div>
  )
}

export default SavedWeatherCard;
