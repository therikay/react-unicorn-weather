import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayCelsius(event) {
    event.preventDefault();
      setUnit("celsius");
  }
function displayFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");
    }

    function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
}

  if (unit === "celsius") {
     return (
      <div className="Temperature">
        <div className="row">
          <div className="col-5">
            <div className="currentTemperature">
              <div>
                {" "}
                <h1 className="current-temp"> {props.celsius} </h1>{" "}
              </div>
            </div>
          </div>
          <div className="col-1">
            <p className="units">
              <span className="celsius"> C°</span>{" "}
              <a href="/" className="fahrenheit" onClick={displayFahrenheit}>
                F°
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <div className="row">
          <div className="col-5">
            <div className="currentTemperature">
              <div>
                {" "}
                <h1 className="current-temp">{Math.round(fahrenheit())} </h1>{" "}
              </div>
            </div>
          </div>
          <div className="col-1">
            <p className="units">
              <a href="/" onClick= {displayCelsius} >
                C°
              </a>{" "}
              <span className="fahrenheit">F°</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
