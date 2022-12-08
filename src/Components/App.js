// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import '../App.css';
import About from './About';
import Home from './Home';
import NavBar from './NavBar';
import Search from './Search';
import { Route, Switch } from 'react-router-dom'
import CardList from './CardList';

function App() {

  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('keith');
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';
  const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  const [savedCitys, setSavedCitys] = useState([]);
  const [displayedCitys, setDisplayedCitys] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState({});

  useEffect(() => {
    fetch(queryURL)
      .then((r)=>r.json())
      .then((weather)=> 
      (setWeather(weather))
    );
  }, [queryURL])

  useEffect(() => {
    fetch("http://localhost:4000/saved-cities")
      .then((r)=>r.json())
      .then((savedCitys)=> 
      (setSavedCitys(savedCitys))
    );
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/displayed-cities")
      .then((r)=>r.json())
      .then((displayedCitys)=> 
      (setDisplayedCitys(displayedCitys))
    );
  }, []);

  useEffect(() => {
      fetch("http://localhost:4000/weather-icons")
        .then((r)=>r.json())
        .then((weatherIcon)=> 
        (setWeatherIcon(weatherIcon?.[0]?.image))
      );
    }, []);

    const [weatherIcons, setWeatherIcons] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/weather-icons")
        .then((r)=>r.json())
        .then((weatherIcons)=> 
        (setWeatherIcons(weatherIcons))
      );
    }, []);
    
  console.log(weatherIcons);

  // if (weatherIcon?.name === 'mist') {
  //   setWeatherIcon(weatherIcon?.[0]?.image)
  // } else if (weatherIcon?.name === 'sunny') {
  //   setWeatherIcon(weatherIcon?.[1]?.image)
  // }

  // console.log(weatherIcon);


  const handleDelete = () => {}

  const handleSubmit = () => {}
  
  return (

    <div className="App" >
      <NavBar />
        <Switch>
          <Route path="/watchlist" >
            <CardList setWeatherIcon={setWeatherIcon} weatherIcons={weatherIcons} savedCitys={savedCitys} handleDelete={handleDelete} />
          </Route>
          <Route path="/search">
            <Search setWeatherIcon={setWeatherIcon} weatherIcon={weatherIcon} weather={weather} onSubmitQuery={setCity} handleSubmit={handleSubmit} />
          </Route>
          <Route path= "/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home displayedCitys={displayedCitys} weatherIcon={weatherIcon} />
          </Route>
        </Switch>

    </div>
  );
}


export default App;