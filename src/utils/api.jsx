

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "6130cd2c5f989c8182bed663e1661b23";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const GEO_API_KEY = "8fcc6bec91mshda199352c066767p1d7059jsn8eab5ab7b286";

const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const fetchCities = async (inputValue) => {
  if (!inputValue) {
    return { options: [] };
  }

  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("error", error);
  }
};
export const fetchCurrentWeather = async (lat,long) => {
    const url = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error ("Network response was not ok!")
    }
    return response.json();
}

export const fetchForecastWeather = async (lat,long) => {
    const url = `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error ("Network response was not ok!")
    }
    return response.json();
}

