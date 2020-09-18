import React, {useState} from "react";
import axios from "axios";
//import Loader from "react-loader-spinner";


export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
      setWeatherData({
      time: "15:00",
      date: "september 18th 2020",
      temperature: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      humidity: response.data.main,
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
      icon: response.data.weather[0].icon,
      });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
    <div className="currentConditions">
      <div className="row">
        <div className="col-6">
            <img
            
            src={weatherData.icon}
            alt={weatherData.description}
            className="icon"
          />
          <div className="city" style={{fontSize: 35, fontWeight: "bold" }}>
            {weatherData.city}, {weatherData.country}
          </div>

          
        </div>
        <div className="col-5">
          <div className="currentTemperature">
            <div >
              {" "}
              <h1 className="current-temp"> {weatherData.temperature} </h1>{" "}
              
            </div>
           
          </div>       
        </div>
        <div className="col-1">
        <p className="units">
             <span className ="celsius"> C°</span>  F°
            </p>
        </div>
       

      </div>
      <div className = "row">
      <div className="col-6">
          <div className="timeAndDate">
            <span id="current-time"> {weatherData.time} </span> <br/>
            <span id="current-date"> {weatherData.date}</span>
              
          </div>
      </div>
          <div className="col-6">
            <div className = "text-capitalize">
        <p className="currentHighLow">
          High <span id="current-high"> {weatherData.high} </span> | Low{" "}
          <span id="current-low"> {weatherData.low} </span> <br />
                <span id="current-humidity"> {weatherData.humidity} % Humidity </span>
          <span id="weather-description"> Windy </span>
          </p></div></div>
        </div>
    </div>
  );
  } else {
    const apiKey = "8c857ce7fed7ba60a40e5e9626433083";
  let city = "Paris"
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(handleResponse);

   return "Loading...";
  }
  
}
