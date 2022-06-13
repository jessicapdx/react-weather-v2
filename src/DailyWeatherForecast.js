import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./DailyWeatherForecast.css";
import axios from "axios";

export default function DailyWeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.lon || props.lat]);

  function handleResponse(response) {
    let resp = response.data.daily;
    setForecast(resp);
    setLoaded(true);
  }

  function getForecast() {
    let apiKey = "e9bb26ed626e12b32c5d3d0d23619b61";
    let lon = props.lon;
    let lat = props.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="DailyWeather">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    getForecast();
    return null;
  }
}
