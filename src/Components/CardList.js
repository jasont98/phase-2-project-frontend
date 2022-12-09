import React, { useState } from 'react';
import SavedWeatherCard from './SavedWeatherCard';
import SnowFall from 'react-snowfall';

export const CardList = ({ savedCitys, handleDelete, isDusk, handleSwitch }) => {

  return (
    <>
    <div className={ isDusk ? 'dusk' : 'dawn' }> 
    <SnowFall /> 
      <div className='switchDiv' id='somshit'>
        <label className="switch">
          <input type="checkbox" onChange={handleSwitch} />
          <span className="slider"></span>
        </label>
      </div>
    </div>

    <div className="saved-container">
    {savedCitys.map(savedCity => {
        return <SavedWeatherCard savedCity={savedCity} handleDelete={handleDelete}/>
      })}
      </div>
    </>
  )
}

export default CardList;