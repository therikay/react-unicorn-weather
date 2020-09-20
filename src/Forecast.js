import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastList from "./ForecastList";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    
    
    
  }

    if (loaded) {
    return (
      <div className="WeatherForecast row">
        <ForecastList data={forecast.list[0]} />
        <ForecastList data={forecast.list[1]} />
        <ForecastList data={forecast.list[2]} />
        <ForecastList data={forecast.list[3]} />
      </div>
    );
  } else {
  let apiKey = "a2fa8705db7885cbca37eb2614b330b0";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleForecastResponse);
return "Loading..."

  }
  




}
