import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let tempResp = props.data.temp;
  let weatherResp = props.data.weather[0];

  function dayFormat(dateTime) {
    let date = new Date(dateTime * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function roundTemp(temp) {
    return Math.round(temp);
  }

  return (
    <div>
      <div className="DailyWeather-day">
        <span>{dayFormat(props.data.dt)}</span>
      </div>
      <div className="DailyWeather-icon">
        <WeatherIcon code={weatherResp.icon} size={45} />
      </div>
      <div className="DailyWeather-temps">
        <span className="DailyWeather-temp-day">
          {roundTemp(tempResp.max)}°
        </span>
        <span className="DailyWeather-temp-night">
          {roundTemp(tempResp.min)}°
        </span>
      </div>
    </div>
  );
}
