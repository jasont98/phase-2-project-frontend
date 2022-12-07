// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import '../App.css';
import WeatherCard from './WeatherCard';
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
  // console.log(city)

  useEffect(() => {
    fetch(queryURL)
      .then((r)=>r.json())
      .then((weather)=> 
      (setWeather(weather))
    );
  }, [city])
  // console.log(weather)

  return (
    <div className="App" >
      <NavBar />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/watchlist" >
      <CardList />
      </Route>
      <Route path="/search">
      <Search onSubmitQuery={setCity}/>
      </Route>
      <Route path= "/about">
      <About />
      </Route>
    </Switch>
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;