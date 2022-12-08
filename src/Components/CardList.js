import React from 'react';
import SavedWeatherCard from './SavedWeatherCard';

export const CardList = ({ savedCitys, handleDelete }) => {

  return (
    <div className="saved-container">
      {savedCitys.map(savedCity => {
        return <SavedWeatherCard savedCity={savedCity} handleDelete={handleDelete}/>
      })}
    </div>
  )
}

export default CardList;