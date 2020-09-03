import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast() {
  return (
    <div className="forecast-list">
      <div className="col-12">
        <div id="forecast">
          <li className="media" id="forecast-element">
            <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="#" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">19:00</h5>
              <div>
                <div className="temperature">
                  {" "}
                  High <span className="forecast-hi">17 °C </span> | Low{" "}
                  <span className="forecast-lo">16 °C</span>
                </div>
                Humidity: 79 % | Wind: 6 m/s
              </div>
            </div>
          </li>

          <li className="media" id="forecast-element">
            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="#" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">22:00</h5>
              <div>
                <div className="temperature">
                  {" "}
                  High <span className="forecast-hi">15 °C </span> | Low{" "}
                  <span className="forecast-lo">14 °C</span>
                </div>
                Humidity: 80 % | Wind: 6 m/s
              </div>
            </div>
          </li>

          <li className="media" id="forecast-element">
            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="#" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">01:00</h5>
              <div>
                <div className="temperature">
                  {" "}
                  High <span className="forecast-hi">15 °C </span> | Low{" "}
                  <span className="forecast-lo">14 °C</span>
                </div>
                Humidity: 80 % | Wind: 6 m/s
              </div>
            </div>
          </li>

          <li className="media" id="forecast-element">
            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="#" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">03:00</h5>
              <div>
                <div className="temperature">
                  {" "}
                  High <span className="forecast-hi">15 °C </span> | Low{" "}
                  <span className="forecast-lo">14 °C</span>
                </div>
                Humidity: 80 % | Wind: 6 m/s
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}
