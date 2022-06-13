import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temp">{Math.round(props.fahrenheit)}</span>
      <span className="unit">℉</span>
    </div>
  );
}
