import React, { useState, Fragment } from "react";

import { getCurrentWeather, getForecast } from "./api";
import SearchPage from "./features/SearchPage";
import WeatherPage from "./features/WeatherPage";


const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");

  const onClickSearch = () => {
    handleWeatherResponse();
    setSearchInputValue("");
  }

  const handleWeatherResponse = async () => {
    try {
      const currentWeatherResponse = await getCurrentWeather(searchInputValue);
      const futureWeatherResponse = await getForecast(currentWeatherResponse.data.coord.lat, currentWeatherResponse.data.coord.lon);
      setWeatherData({ currentWeather: currentWeatherResponse.data, forecast: futureWeatherResponse.data });
    } catch (error) {
      console.log(error);
      alert("Could not find location.")
    }
  }

  return (
    <Fragment>
      {
        weatherData ? 
        <WeatherPage
          weatherData={weatherData}
          onClickSearch={onClickSearch}
          searchInputValue={searchInputValue}
          setSearchInputValue={(value) => setSearchInputValue(value)}
         /> :
        <SearchPage 
          onClickSearch={onClickSearch}
          searchInputValue={searchInputValue}
          setSearchInputValue={(value) => setSearchInputValue(value)}
        />
      }
    </Fragment>
  );
}

export default App;
