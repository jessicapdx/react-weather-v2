import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(weatherData) {
  let resp = weatherData.data;
  console.log(resp);
  return (
    <div className="WeatherInfo">
      <h1>{resp.name}</h1>
      <ul className="list-unstyled">
        <li>
          <FormattedDate date={resp.date} />
        </li>
        <li className="text-capitalize">{resp.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon code={resp.icon} alt={resp.description} />
          <span className="temp">{Math.round(resp.temperature)}</span>
          <span className="unit">℉</span>
        </div>
        <div className="col-6">
          <ul className="list-unstyled">
            <li>Precipitation: 15%</li>
            <li>Humidity: {resp.humidity}%</li>
            <li>Wind: {resp.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
