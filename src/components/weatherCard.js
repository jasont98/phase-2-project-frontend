function WeatherCard({ weather }) {
    return (
        <div>
            <h1>{weather.name}</h1>
            <h1>{weather.weather[0].main}</h1>
        </div>
    )

}

export default WeatherCard;