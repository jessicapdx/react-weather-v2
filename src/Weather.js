import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    let resp = response.data;
    setWeatherData({
      date: new Date(resp.dt * 1000),
      description: resp.weather[0].description,
      humidity: resp.main.humidity,
      iconUrl: "//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      name: resp.name,
      //TODO: precipitation
      ready: true,
      temperature: resp.main.temp,
      wind: resp.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
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
      </div>
    );
  } else {
    const apiKey = "e9bb26ed626e12b32c5d3d0d23619b61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return <div>"Loading..."</div>;
  }
}
