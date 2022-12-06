import { useState } from 'react';


function Search({ onSubmitQuery }) {
    
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitQuery(city);
      }
    
      function handleChange(event) {
        setCity(event.target.value);
      }    


    return (
        <form onSubmit={handleSubmit}>Search for a city or zipcode: 
            <input value={city} onChange={handleChange} />
            <button>🔎</button>
        </form>
    )
}

export default Search;