import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";


export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <div className="city" style={{ fontSize: 35, fontWeight: "bold" }}>
            {props.data.city}
          </div>
        </div>
        <div className="col-6">
          <div className="float-right">
            <Temperature
              celsius={props.data.temperature}
              units={props.units}
              setUnits={props.setUnits}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="timeAndDate">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-6">
          <div className="text-capitalize">
            <p className="currentHighLow">
              <span id="current-humidity">
                {" "}
                {props.data.humidity}% Humidity{" "}
              </span>{" "}
              <br />
              <span id="weather-description"> {props.data.description} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
