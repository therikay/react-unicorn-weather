import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast.js";
import "./Weather.css"

export default function CurrentWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [units, setUnits] = useState("celsius");

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      time: "15:00",
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function locateMe() {
    navigator.geolocation.getCurrentPosition(location);
  }

  function location(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = "a2fa8705db7885cbca37eb2614b330b0";
    let locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(locationUrl).then(handleResponse);
  }

  function search() {
    const apiKey = "a2fa8705db7885cbca37eb2614b330b0";
    let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(cityUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <WeatherInfo data={weatherData} units={units} setUnits={setUnits} />
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" />
            <button type="button" onClick={locateMe}>
              My Location
            </button>
          </form>
        </div>
        <Forecast city={weatherData.city} units={units} />
      </div>
    );
  } else {
    search();

    return (
      <div>
        <Loader type="Hearts" color="#5d4b94" height={80} width={80} />
      </div>
    );
  }
}
