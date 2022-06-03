import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          ℉ |{" "}
          <a href="/" onClick={showCelsius}>
            ℃
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>{" "}
          | ℃
        </span>
      </div>
    );
  }
}
