import React from "react";
import { useWeather } from "../../../contexts/WeatherContext";
import "./CurrentWeather.css"

const CurrentWeatherDisplay = () => {
  const { currentWeather } = useWeather();
  if (currentWeather) {
    return (
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{currentWeather.city}</p>
            <p className="weather-description">
              {currentWeather.weather[0].description}
            </p>
          </div>
          <img
            src={`/icons/${currentWeather.weather[0].icon}.png`}
            alt="weather"
          />
        </div>
        <div className="bottom">
          <p className="temperature">{`${Math.round(
            currentWeather.main.feels_like
          )}°C`}</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label top">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">{`${Math.round(
                currentWeather.main.feels_like
              )}°C`}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{`${Math.round(
                currentWeather.wind.speed
              )} km/s`}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{`${Math.round(
                currentWeather.main.humidity
              )}%`}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{`${Math.round(
                currentWeather.main.pressure
              )} hPa`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentWeatherDisplay;
