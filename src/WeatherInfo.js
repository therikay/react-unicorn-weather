import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="currentConditions">
        <div className="row">
          <div className="col-6">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                              />
            </div>

            
            <div className="city" style={{ fontSize: 35, fontWeight: "bold" }}>
              {props.data.city}
            </div>
          </div>
          <div className="col-5">
            <div className="currentTemperature">
              <div>
                {" "}
                <h1 className="current-temp">
                  {" "}
                  {props.data.temperature}{" "}
                </h1>{" "}
              </div>
            </div>
          </div>
          <div className="col-1">
            <p className="units">
              <span className="celsius"> C°</span> F°
            </p>
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
                High <span id="current-high"> {props.data.high} </span> | Low{" "}
                <span id="current-low"> {props.data.low} </span> <br />
                <span id="current-humidity">
                  {" "}
                  {props.data.humidity} % Humidity{" "}
                </span>
                <span id="weather-description"> Windy </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
