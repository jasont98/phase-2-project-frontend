import { Card } from 'semantic-ui-react'
import React from 'react';

function WeatherCard({ weather }) {

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
                </Card.Content> 
            </Card>
        </div>
    )
}

export default WeatherCard;
