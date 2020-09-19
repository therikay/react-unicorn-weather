import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Forecast(props) {
  const apiKey = "c118a6a26dd334d10e75524e849f04af";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}& appid=${apiKey}& units=metric`;
  axios.get(url).then(handleForecastResponse);

  function handleForecastResponse(response) {
    console.log(response.data);
  }
  return ("hello");
}
