import { useState } from 'react';
import SearchWeatherCard from './SearchCard'
import SnowFall from 'react-snowfall';

function Search({ onSubmitQuery, weather, onAddCity, handleSwitch, isDusk }) {
    
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitQuery(city);
    }
    
      function handleChange(event) {
        setCity(event.target.value);
    }

    return (
    <>
        <div className={ isDusk ? 'dusk' : 'dawn' }> 
            <div className='switchDiv' id='somshit'>
                <label className="switch">
                    <input type="checkbox" onChange={handleSwitch} />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
        <div>
            <SnowFall />
        </div>
        <div className="search-container">
            <form className={ isDusk ? 'search-bar' : 'search-bar1' } onSubmit={handleSubmit}>Search for a city, state or zipcode:
                <input value={city} onChange={handleChange} />
                <button>🔎</button>
            </form>
            <div className="flexbox-container2">
                <SearchWeatherCard weather={weather} onAddCity={onAddCity} />
            </div>
        </div>
    </>
    )
}

export default Search;