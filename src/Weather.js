import React, { useState } from "react";
import DailyWeatherForecast from "./DailyWeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const baseUrl = `http://openweathermap.org/`;
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    let resp = response.data;
    setWeatherData({
      date: new Date(resp.dt * 1000),
      description: resp.weather[0].description,
      humidity: resp.main.humidity,
      iconUrl: `${baseUrl}img/wn/${resp.weather[0].icon}@2x.png`,
      icon: resp.weather[0].icon,
      lat: resp.coord.lat,
      lon: resp.coord.lon,
      name: resp.name,
      //TODO: precipitation
      ready: true,
      temperature: resp.main.temp,
      wind: Math.round(resp.wind.speed),
    });
  }

  function search() {
    const apiKey = "e9bb26ed626e12b32c5d3d0d23619b61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                onChange={handleCityChange}
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <DailyWeatherForecast lat={weatherData.lat} lon={weatherData.lon} />
      </div>
    );
  } else {
    search();
    return <div>"Loading..."</div>;
  }
}
