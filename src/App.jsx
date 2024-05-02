import "./App.css";
import CurrentWeatherDisplay from "./assets/components/currentWeather/CurrentWeatherDisplay";
import ForecastWeatherDisplay from "./assets/components/forecastWeather/ForecastWeatherDisplay";
import Search from "./assets/components/search/Search";
import { useWeather } from "./contexts/WeatherContext";

function App() {
  const { forecastWeather } = useWeather();

  return (
    <div className="container">
      <Search />
      <CurrentWeatherDisplay />
      {forecastWeather && <ForecastWeatherDisplay />}
    </div>
  );
}

export default App;
