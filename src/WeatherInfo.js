import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(weatherData) {
  let resp = weatherData.data;
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <WeatherIcon code={resp.icon} alt={resp.description} size={50} />
          <WeatherTemperature fahrenheit={resp.temperature} />
        </div>
        <div className="col-4">
          <ul className="list-unstyled WeatherInfo-details">
            <li>Humidity: {resp.humidity}%</li>
            <li>Wind: {resp.wind} mph</li>
          </ul>
        </div>
        <div className="col-4 WeatherInfo-city">
          <h1>{resp.name}</h1>
          <ul className="list-unstyled">
            <li>
              <FormattedDate date={resp.date} />
            </li>
            <li className="text-capitalize">{resp.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
