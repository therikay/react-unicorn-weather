import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "1544e67f9b685a7d927f11b2e914bf96";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

  return (
    <div className="currentConditions">
      <div className="row">
        <div className="col-6">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="Clear"
            id="weather-icon-now"
          />
          <div id="city">Cardiff</div>
          <div className="timeAndDate">
            <p>
              <span id="current-date"> May 27th 2020|</span>
              <span id="current-time"> 15:00 </span>
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="currentTemperature">
            <div>
              {" "}
              <h1 className="current-temp"> 25 </h1>{" "}
            </div>
            <div className="units">
              {" "}
              <span className="celsius"> °C </span> |{" "}
              <span className="fahrenheit"> °F </span>
            </div>
          </div>
        </div>

        <div className="currentHighLow">
          High <span id="current-high"> 27 </span> | Low{" "}
          <span id="current-low"> 15 </span> <br />
          <span id="current-humidity"> 15% Humidity </span>
          <span id="weather-description"> Windy </span>
        </div>
      </div>
    </div>
  );
}
