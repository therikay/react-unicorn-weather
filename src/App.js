import React from "react";
import "./App.css";
import Weather from "./CurrentConditions.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.js";
import Forecast from "./Forecast.js";

function App() {
  return (
    <div className="App">
      <div className="weatherContainer">
        <Weather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
