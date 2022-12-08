import { useState } from 'react';
import SearchWeatherCard from './SearchCard'
import SnowFall from 'react-snowfall';

function Search({ onSubmitQuery, weather, onAddCity }) {
    
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitQuery(city);
    }
    
      function handleChange(event) {
        setCity(event.target.value);
    }

    return (
        <div className='About' style={{   position: '' }}>
        <SnowFall />
        <div className="search-container">
            <form className="search-bar" onSubmit={handleSubmit}>Search for a city, state or zipcode:
                <input value={city} onChange={handleChange} />
                <button>🔎</button>
            </form>
            <div className="flexbox-container2">
                <SearchWeatherCard weather={weather} onAddCity={onAddCity} />
            </div>
        </div>
    </div>
    )
}

export default Search;