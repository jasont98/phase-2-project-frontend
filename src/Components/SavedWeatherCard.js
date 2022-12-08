import { Card } from 'semantic-ui-react'
import React from 'react';

function SavedWeatherCard({ weatherObj, weatherIcons, handleDelete, setWeatherIcon, weatherIcon }) {

    const temperatureConverter = (valNum) => {
        valNum = parseFloat(valNum);
        return (((valNum-273.15)*1.8)+32).toFixed(0);
      }
      
      console.log(weatherObj?.weather?.[0].description)

      if (weatherObj?.weather?.[0].description === 'clear sky') {
            setWeatherIcon(weatherIcons?.[0]?.image)
        } else if (weatherObj?.weather?.[0].description === 'overcast clouds') {
            setWeatherIcon(weatherIcons?.[1]?.image)
        } else if (weatherObj?.weather?.[0].description === 'broken clouds') {
            setWeatherIcon(weatherIcons?.[2]?.image)
        } else if (weatherObj?.weather?.[0].description === 'scattered clouds') {
            setWeatherIcon(weatherIcons?.[3]?.image)
        } else if (weatherObj?.weather?.[0].description === 'haze') {
            setWeatherIcon(weatherIcons?.[4]?.image)
        } else if (weatherObj?.weather?.[0].description === 'light rain') {
            setWeatherIcon(weatherIcons?.[5]?.image)
        } else if (weatherObj?.weather?.[0].description === 'mist') {
            setWeatherIcon(weatherIcons?.[6]?.image)
        } else if (weatherObj?.weather?.[0].description === 'snow') {
            setWeatherIcon(weatherIcons?.[7]?.image)
        } else if (weatherObj?.weather?.[0].description === 'light snow') {
            setWeatherIcon(weatherIcons?.[8]?.image)
        }

      console.log(weatherIcons?.[0]?.image)

    return (
        <div className="weather-card">
            <Card className="ui-raised-card" >
                <Card.Content>
                    <Card.Header className="header">{weatherObj.name}</Card.Header>
                    <h3>Country: {weatherObj.sys?.country}</h3>
                    <h3>Feels like: {temperatureConverter(weatherObj.main?.feels_like)}ºF</h3>
                    <h3>vibes: {weatherObj.weather?.[0].description}</h3>
                    <img src={weatherIcon} alt={weatherObj.name}></img>
                    <h3>cloudy: {weatherObj.clouds?.all}%</h3>
                    <button onClick={handleDelete}>❌</button>
                </Card.Content> 
            </Card>
        </div>
    )
}

export default SavedWeatherCard;
