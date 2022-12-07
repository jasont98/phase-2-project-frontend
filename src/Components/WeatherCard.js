// import './styles.css';
import { Card } from 'semantic-ui-react'

function WeatherCard({ weather }) {

    const temperatureConverter = (valNum) => {
        valNum = parseFloat(valNum);
        return (((valNum-273.15)*1.8)+32).toFixed(0);
      }
      
    return (
        <div class="ui centered card">
            <Card class="ui centered card">
                <Card.Content>
                    <Card.Header className="header">{weather.name}</Card.Header>
                    <h3>Country: {weather.sys?.country}</h3>
                    <h3>Feels like: {temperatureConverter(weather.main?.feels_like)}ºF</h3>
                    <h3>vibes: {weather.weather?.[0].description}</h3>
                    <h3>number of clouds: {weather.clouds?.all}</h3>
                </Card.Content> 
            </Card>
        </div>
    )

}

export default WeatherCard;
