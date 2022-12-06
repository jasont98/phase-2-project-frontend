function WeatherCard({ weather }) {

    const temperatureConverter = (valNum) => {
        valNum = parseFloat(valNum);
        return (((valNum-273.15)*1.8)+32).toFixed(0);
      }
      
    return (
        <div>
            <h1>{weather.name}</h1>
                <h3>Country: {weather.sys?.country}</h3>
                <h1>Feels like: {temperatureConverter(weather.main?.feels_like)}ºF</h1>
                <h1>vibes: {weather.weather?.[0].description}</h1>
                <h1>number of clouds: {weather.clouds?.all}</h1>
        </div>
    )

}

export default WeatherCard;
