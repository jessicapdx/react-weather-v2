import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./DailyWeatherForecast.css";
import axios from "axios";

export default function DailyWeatherForecast() {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    let resp = response.data.daily;
    setForecast(resp);
    setLoaded(true);
  }

  function getForecast() {
    let apiKey = "e9bb26ed626e12b32c5d3d0d23619b61";
    let lon = "-122.599998";
    let lat = "45.633331";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="DailyWeather">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    getForecast();
    return null;
  }
}
