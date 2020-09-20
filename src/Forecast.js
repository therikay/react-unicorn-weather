import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastList from "./ForecastList";
import Loader from "react-loader-spinner";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastList data={forecast.list[0]} units={props.units} />
        <ForecastList data={forecast.list[1]} units={props.units} />
        <ForecastList data={forecast.list[2]} units={props.units} />
        <ForecastList data={forecast.list[3]} units={props.units} />
      </div>
    );
  } else {
    const apiKey = "a2fa8705db7885cbca37eb2614b330b0";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return (
      <div>
        <Loader type="Hearts" color="#5d4b94" height={80} width={80} />
      </div>
    );
  }
}
