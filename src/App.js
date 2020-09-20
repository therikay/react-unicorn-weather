import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.js";


function App() {
  return (
    <div className="App">
      <div className="weatherContainer">
        <Weather defaultCity="Cardiff"/>
        </div>
      <Footer />
    </div>
  );
}

export default App;
