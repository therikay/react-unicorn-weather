import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastList(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000)
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°C`
    }

    function fahrenheit() {
      return `${Math.round((props.data.main.temp * 9) / 5 + 32)}°F`;
    }

    if (props.units === "celsius") {
        return (
            <div className="ForecastList col">
                {hours()}
                <WeatherIcon code={props.data.weather[0].icon}/>
                {temperature()}
            </div>
        );
    } else {
        return (
            <div className="ForecastList col">
                {hours()}
                <WeatherIcon code={props.data.weather[0].icon} />
                {fahrenheit()}
            </div>
        );

    }

}