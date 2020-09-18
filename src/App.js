import React from "react";
import "./App.css";
import Current from "./Current.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.js";
import Forecast from "./Forecast.js";


function App() {
  return (
    <div className="App">
      <div className="weatherContainer">
        <Current defaultCity="Cardiff" />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
