import { useState } from 'react';
import SearchWeatherCard from './SearchCard'

function Search({ onSubmitQuery, weather, weatherIcon }) {
    
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitQuery(city);
    }
    
      function handleChange(event) {
        setCity(event.target.value);
    }    

    return (
        <div className="search-container">
            <form className="search-bar" onSubmit={handleSubmit}>Search for a city, state or zipcode:
                <input value={city} onChange={handleChange} />
                <button>🔎</button>
            </form>
            <div className="flexbox-container2">
                <SearchWeatherCard weatherIcon={weatherIcon} weather={weather} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Search;