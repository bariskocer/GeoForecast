import React, {createContext, useContext, useState } from "react";
import { fetchCurrentWeather, fetchForecastWeather } from "../utils/api";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = async (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    setLoading(true);
    try {
      const [currentWeatherData, forecastData] = await Promise.all([
        fetchCurrentWeather(lat, long),
        fetchForecastWeather(lat, long),
      ]);
      setCurrentWeather({ city: searchData.label, ...currentWeatherData });
      setForecastWeather({ city: searchData.label, ...forecastData });
      
    } catch (error) {
      console.error("Search Change Error", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(forecastWeather);
  
 return (
    <WeatherContext.Provider value={{currentWeather,forecastWeather,loading,handleSearchChange}}>
        {children}
    </WeatherContext.Provider>
 )
};

export const useWeather = () => useContext(WeatherContext);


