import React from 'react';

import './App.css';
import WeatherEngine from './components/WeatherCard/Weathercardengine';
import Clock from './components/clock'
import News from './components/newsarticles'
import Nav from './components/Nav'
function App() {
  return (
    <div>
      <div className="notes-page">
        <Nav />
      </div>

      <div>
        <Clock />
        <br />
        <br />
      </div>

      <div className="App">
        <WeatherEngine location="Canada" />
        <WeatherEngine location="Chennai" />
        <WeatherEngine location="Alaska" />
        <WeatherEngine location="Delhi" />
        <WeatherEngine location="Minnesota" />
        <WeatherEngine location="Bangalore" />
      </div>

      <div className="news">
        <br />
        <br />
        <br />
        <News />
      </div>
    </div>
  );
  
}

export default App;
