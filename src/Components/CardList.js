import React, { useState, useEffect } from 'react';
import SavedWeatherCard from './SavedWeatherCard';

export const CardList = ({ savedCitys, weatherIcon, handleDelete, setWeatherIcon, weatherIcons }) => {

  const [weatherObjs, setWeatherObjs] = useState([]);
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';
  // const [weatherIcon, setWeatherIcon] = useState('');

  const createSavedCitys = () => {
    return savedCitys.map((savedCity) => {
      return ( 
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${savedCity.name}&appid=${APIKey}`)
      .then((r)=>r.json())
      .then((weatherObj)=> {
        setWeatherObjs(weatherObjs => [...weatherObjs, weatherObj])
      }
    ))})
  }


  console.log(weatherIcons)

  useEffect(() => {createSavedCitys();
  }, [savedCitys])

  const renderSavedCards = () => {
    return weatherObjs.map((weatherObj) => {
      console.log(weatherObj?.weather?.[0].description);
      console.log(weatherIcons?.[0]?.image)
            
      if (weatherObj?.weather?.[0].description == 'clear sky') {
          setWeatherIcon(weatherIcons?.[0]?.image)
        } else if (weatherObj?.weather?.[0].description == 'overcast clouds') {
          setWeatherIcon(weatherIcons?.[1]?.image)
        } else if (weatherObj?.weather?.[0].description == 'broken clouds') {
          setWeatherIcon(weatherIcons?.[2]?.image)
        } else if (weatherObj?.weather?.[0].description == 'scattered clouds') {
          setWeatherIcon(weatherIcons?.[3]?.image)
        } else if (weatherObj?.weather?.[0].description == 'scattered clouds') {
          setWeatherIcon(weatherIcons?.[4]?.image)
        } else if (weatherObj?.weather?.[0].description == 'haze') {
          setWeatherIcon(weatherIcons?.[5]?.image)
        } else if (weatherObj?.weather?.[0].description === 'light rain') {
          setWeatherIcon(weatherIcons?.[6]?.image)
        } else if (weatherObj?.weather?.[0].description == 'mist') {
          setWeatherIcon(weatherIcons?.[7]?.image)
        }

      // console.log(weatherIcons);
      return (
        // console.log(weatherObj?.weather?.[0].description)
        <SavedWeatherCard weatherIcon={weatherIcon} setWeatherIcon={setWeatherIcon} weatherObj={weatherObj} weatherIcons={weatherIcons} handleDelete={handleDelete} />
      )})
    }
  
  return (
    <div className="saved-container">
      {renderSavedCards()}
    </div>
  )
}

export default CardList;