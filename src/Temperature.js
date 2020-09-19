import React from "react";

export default function Temperature(props) {
    return(
        <div className="Temperature">
            <div className ="row">
          <div className="col-5">
            <div className="currentTemperature">
              <div>
                {" "}
                <h1 className="current-temp">
                  {" "}
                  {props.celsius}{" "}
                </h1>{" "}
              </div>
            </div>
          </div>
          <div className="col-1">
            <p className="units">
              <span className="celsius"> C°</span>  <span className="fahrenheit">F°</span> 
            </p>
            </div>
            </div>
             </div>);
}