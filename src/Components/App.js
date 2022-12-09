// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import '../App.css';
import About from './About';
import Home from './Home';
import NavBar from './NavBar';
import Search from './Search';
import { Route, Switch } from 'react-router-dom'
import CardList from './CardList';
import Footer from './Footer';

function App() {

  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('keith');
  const APIKey = '963f1edba44b1dcf82fe895ef811cf6a';
  const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  const [savedCitys, setSavedCitys] = useState([]);
  const [displayedCitys, setDisplayedCitys] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState({});
  const [weatherIcons, setWeatherIcons] = useState([]);
  const [isDusk, setIsDusk] = useState(true)

  useEffect(() => {
    fetch(queryURL)
      .then((r)=>{
        if (r.status === 404) {
          alert('That aint a place my dude')
        } else {
          return r.json()
        }
      })
      .then((weather)=> {
        if (weather.type === 'error') {
          console.log(weather.type, weather.message)
        } else {
          setWeather(weather)
        }
      }
    );
  }, [queryURL])

  useEffect(() => {
    fetch("http://localhost:4000/saved-cities")
      .then((r)=>r.json())
      .then((savedCitys)=> 
      (setSavedCitys(savedCitys))
    );
  }, []);

  const onAddCity = (newCity) => {
    setSavedCitys((savedCitys) => [...savedCitys, newCity])
  }

  const handleDelete = (deletedCity) => {
    const updatedCitys = savedCitys.filter(originalCity => {
      return deletedCity.id !== originalCity.id;
    });
    setSavedCitys(updatedCitys);
  }

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
        .then((weatherIcons)=> 
        (setWeatherIcons(weatherIcons))
      );
    }, []);

  const handleSwitch = () => {
    setIsDusk(!isDusk)
  }

  return (
    <div className="App" >
      <div className='main'>
        <NavBar />
          <Switch>
            <Route path="/watchlist" >
              <CardList handleSwitch={handleSwitch} isDusk={isDusk} savedCitys={savedCitys} handleDelete={handleDelete} />
            </Route>
            <Route path="/search">
              <Search handleSwitch={handleSwitch} isDusk={isDusk} onSubmitQuery={setCity} weather={weather} onAddCity={onAddCity} />
            </Route>
            <Route path= "/about">
              <About handleSwitch={handleSwitch} isDusk={isDusk} />
            </Route>
            <Route exact path="/">
              <Home displayedCitys={displayedCitys} weatherIcon={weatherIcon} />
            </Route>
          </Switch>
        </div>
        <Footer />
    </div>
  );
}


export default App;