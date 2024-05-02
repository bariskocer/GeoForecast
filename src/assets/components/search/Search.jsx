import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useWeather } from "../../../contexts/WeatherContext";
import { fetchCities } from "../../../utils/api";

const Search = () => {
  const { handleSearchChange } = useWeather();
  const [search, setSearch] = useState(null);
 

  const loadOptions = async (inputValue) => {
    try {
      const data = await fetchCities(inputValue);
      if (!data || !data.data) {
        return {
          options: [],
        };
      }
      return {
        options: data.data.map((city) => ({
          label: `${city.name}, ${city.countryCode}`,
          value: `${city.latitude} ${city.longitude}`,
        })),
      };
    } catch (error) {
      return {
        options: [],
      };
    }
  };

  const handleChange = async (searchData) => {
    setSearch(searchData);
    handleSearchChange(searchData);
    console.log(searchData);
  };

  return (
    <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
        noOptionsMessage={()=> "No cities found"}
    />
  )
};

export default Search;
