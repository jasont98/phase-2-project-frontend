import React, { useState, useEffect } from 'react';
import SavedWeatherCard from './SavedWeatherCard';

export const CardList = ({ savedCitys, weatherIcon, handleDelete }) => {

  const [weatherObjs, setWeatherObjs] = useState([]);
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';

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

  useEffect(() => {createSavedCitys();
  }, [savedCitys])

  const renderSavedCards = () => {
    return weatherObjs.map((weatherObj) => {
      console.log(weatherObj)
      return (
        <SavedWeatherCard weather={weatherObj} weatherIcon={weatherIcon} handleDelete={handleDelete} />
      )})
    }
  
  return (
    <div className="saved-container">
      {renderSavedCards()}
    </div>
  )
}

export default CardList;



