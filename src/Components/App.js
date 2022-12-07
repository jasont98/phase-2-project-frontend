// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import '../App.css';
import About from './About';
import Home from './Home';

import {createGlobalStyle, ThemeProvider} from "styled-components"


import NavBar from './NavBar';
import Search from './Search';
import { Route, Switch } from 'react-router-dom'
import CardList from './CardList';
import SnowFlake from './SnowFlake';



function App() {

  const [weather, setWeather] = useState([]);
  const [weather1, setWeather1] = useState([]);
  const [weather2, setWeather2] = useState([]);
  const [weather3, setWeather3] = useState([]);
  const [city, setCity] = useState('keith');
  const [city1, setCity1] = useState('Denver')
  const [city2, setCity2] = useState('Tokyo')
  const [city3, setCity3] = useState('New York')
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';
  const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

=======
  const queryURL1 = `http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${APIKey}`;
  const queryURL2 = `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${APIKey}`;
  const queryURL3 = `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${APIKey}`;
  // console.log(city)


  useEffect(() => {
    fetch(queryURL)
      .then((r)=>r.json())
      .then((weather)=> 
      (setWeather(weather))
    );
  }, [city])

  useEffect(() => {
    fetch(queryURL1)
      .then((r)=>r.json())
      .then((weather1)=> 
      (setWeather1(weather1))
    );
  }, [city])

  useEffect(() => {
    fetch(queryURL2)
      .then((r)=>r.json())
      .then((weather2)=> 
      (setWeather2(weather2))
    );
  }, [city])

  useEffect(() => {
    fetch(queryURL3)
      .then((r)=>r.json())
      .then((weather3)=> 
      (setWeather3(weather3))
    );
  }, [city])

  const [savedCity, setSavedCity] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/saved-cities")
      .then((r)=>r.json())
      .then((savedCity)=> 
      (setSavedCity(savedCity))
    );
  }, []);

  console.log(savedCity?.[0]?.name);

  return (

    <div className="App" >
      <NavBar />
        <Switch>
          <Route path="/watchlist" >
            <CardList savedCity={savedCity} />
          </Route>
          <Route path="/search">
            <Search weather={weather} onSubmitQuery={setCity}/>
          </Route>
          <Route path= "/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home weather1={weather1} weather2={weather2} weather3={weather3}/>
          </Route>
        </Switch>

    </div>
    </>
  );
}


export default App;