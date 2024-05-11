import React from "react";
import { useWeather } from "../../../contexts/WeatherContext";
import { groupDataByDate } from "../../../utils/forecast-calculate";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
const ForecastWeatherDisplay = () => {
  const { forecastWeather } = useWeather();

  // forecastWeather.list verisini kontrol et
  console.log("forecastWeather.list:", forecastWeather.list);

  // groupDataByDate fonksiyonun çıktısını kontrol et
  const groupedData = groupDataByDate(forecastWeather.list);
  console.log("groupedData output:", groupedData);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {groupedData.slice(1).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    className="icon-small"
                    src={`icons/${item.icon}.png`}
                    alt="#"
                  />
                  <label className="day">{item.day}</label>
                  <label className="description">{item.weather}</label>
                  <label className="min-max">
                    {Math.round(item.max)}°C /{Math.round(item.min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressuure:</label>
                  <label>{item.pressure} hPA</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind} km/h</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.sea_level} m</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeatherDisplay;
