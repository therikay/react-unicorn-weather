import React from "react";
//import axios from "axios";
//import Loader from "react-loader-spinner";

export default function Current() {
  return (
    <div className="currentConditions">
      <div className="row">
        <div className="col-6">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="Clear"
            className="icon"
          />
          <div className="city" style={{ fontSize: 35, fontWeight: "bold" }}>
            Cardiff
          </div>

          
        </div>
        <div className="col-5">
          <div className="currentTemperature">
            <div >
              {" "}
              <h1 className="current-temp"> 25 </h1>{" "}
              
            </div>
           
          </div>       
        </div>
        <div className="col-1">
        <p className="units">
              C° F°
            </p>
        </div>
       

      </div>
      <div className = "row">
      <div className="col-6">
          <div className="timeAndDate">
            <span id="current-time"> 15:00 </span> <br/>
            <span id="current-date"> May 27th 2020</span>
              
          </div>
      </div>
      <div className="col-6">
        <p className="currentHighLow">
          High <span id="current-high"> 27 </span> | Low{" "}
          <span id="current-low"> 15 </span> <br />
          <span id="current-humidity"> 15% Humidity </span>
          <span id="weather-description"> Windy </span>
          </p></div>
        </div>
    </div>
  );
}
