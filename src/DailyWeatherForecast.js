import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeatherForecast.css";

export default function DailyWeatherForecast() {
  return (
    <div className="DailyWeather">
      <div className="row">
        <div className="col">
          <div className="DailyWeather-day">
            <span>Wed</span>
          </div>
          <div className="DailyWeather-icon">
            <WeatherIcon code="01d" size={45} />
          </div>
          <div className="DailyWeather-temps">
            <span className="DailyWeather-temp-day">19°</span>
            <span className="DailyWeather-temp-night">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
