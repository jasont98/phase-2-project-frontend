import { Card } from 'semantic-ui-react'
import React, { useState } from 'react';

function SearchWeatherCard({ weather, onAddCity }) {

  const initialState = {
      id: "",
      name: "", 
    };

  const [addCityData, setAddCityData] = useState(initialState);

  const handleClick = (e) => {
    e.preventDefault();
      fetch("http://localhost:4000/saved-cities", {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json'
        }, 
          body: JSON.stringify({name: weather.name, weatherId: weather.id})
      })
      .then((r)=>r.json())
      .then((city)=> {
        onAddCity(city);
        console.log(addCityData);
      })    
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setAddCityData({ ...addCityData, [name]: value });
    };

  const temperatureConverter = (valNum) => {
    valNum = parseFloat(valNum);
      return (((valNum-273.15)*1.8)+32).toFixed(0);
  }

  return (
    <div className="weather-card">
      <Card className="ui-raised-card" >
        <Card.Content>
          {/* <Card.Header className="header" value={addCityData.name} >{weather.name}</Card.Header> */}
              <Card.Header className="header" >{weather.name}</Card.Header>

          <h3>Country: {weather.sys?.country}</h3>
          <h3>Feels like: {temperatureConverter(weather.main?.feels_like)}ºF</h3>
          <h3>vibes: {weather.weather?.[0].description}</h3>
          <img src={`./images/${weather.weather?.[0].description}.svg`} alt={weather.name}></img>
                  <button onClick={handleClick} className='buttonSize'>Add to my Watch List!</button>
          <h3>cloudy: {weather.clouds?.all}%</h3>
        </Card.Content> 
      </Card>
    </div>
  )
}

export default SearchWeatherCard;