import React, { useEffect, useState } from 'react';

import TempIcon from '../icons/tempicon.svg';
import SnowIcon from '../icons/snowicon.svg';
import CloudIcon from '../icons/cloudicon.svg';
import RainIcon from '../icons/rainicon.svg';
import WeatherIcon from '../icons/weathericon.svg';
import SunIcon from '../icons/sunicon.svg';
import WindIcon from '../icons/windicon.svg';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(console.error);
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div id="weather-container">
      <h3>Weather</h3>
      <div class="weather-row">
        <img class="weather-icons" src={TempIcon} alt="Temperature Icon" />
        <p>Temp: {weather.current.temperature_2m} Max: {weather.daily.temperature_2m_max} Min: {weather.daily.temperature_2m_min} App Max: {weather.daily.apparent_temperature_2m_max} App Min: {weather.daily.apparent_temperature_2m_min}</p>
      </div>
      <div class="weather-row">
        <img class="weather-icons" src={SnowIcon} alt="Snowfall Icon" />
        <p>Precipitation: {weather.current.precipitation} Daily Rain: {weather.daily.rain_sum} Daily Snowfall: {weather.daily.snowfall_sum} Probability: {weather.daily.precipitation_probability_max}</p>
      </div>
      <div class="weather-row">
        <img class="weather-icons" src={CloudIcon} alt="Cloud Icon" />
        <p>Current Cloud Cover: {weather.current.cloud_cover}</p>
      </div>
      <div class="weather-row">
        <img class="weather-icons" src={RainIcon} alt="Rain Icon" />
        <p>Current Humidity: {weather.current.relative_humidity_2m}</p>
      </div>
      <div class="weather-row">
        <img class="weather-icons" src={WeatherIcon} alt="Weather Icon" />
        <p>Daily Weather Code: {weather.daily.weather_code}</p>
      </div>
      <div class="weather-row">
        <img class="weather-icons" src={SunIcon} alt="Sun Icon" />
        <p>Daily UV Index Max: {weather.daily.uv_index_max}</p>
      </div>
      <div class="weather-row">
        <img class="weather-icons" src={WindIcon} alt="Wind Icon" />
        <p>Daily Windspeed Max: {weather.daily.wind_speed_10m_max}</p>
      </div>
    </div>
  );
};

export default Weather;

