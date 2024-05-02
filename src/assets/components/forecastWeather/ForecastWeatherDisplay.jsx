import React from "react";
import { useWeather } from "../../../contexts/WeatherContext";
import { groupDataByDate } from "../../../utils/forecast-calculate";

const ForecastWeatherDisplay = () => {
  const { forecastWeather } = useWeather();
  const groupedData = groupDataByDate(forecastWeather.list)
  return (
    <div>
        <p>{forecastWeather.list[0].dt}</p>
    </div>
  )
};

export default ForecastWeatherDisplay;
