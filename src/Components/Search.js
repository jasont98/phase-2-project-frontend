import { useState } from 'react';
import WeatherCard from './WeatherCard'

function Search({ onSubmitQuery, weather }) {
    
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
            <form onSubmit={handleSubmit}>Search for a city, state or zipcode: 
                <input value={city} onChange={handleChange} />
                <button>🔎</button>
            </form>
            <div className="flexbox-container2">
                <WeatherCard weather={weather} />
            </div>
        </div>
    )
}

export default Search;