import React, { useState, Fragment } from "react";

import { getCurrentWeather, getFutureWeather } from "./api";
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
      const [currentWeatherResponse, futureWeatherResponse] = await Promise.all([
        getCurrentWeather(searchInputValue), 
        getFutureWeather(searchInputValue)
      ]);
      
      setWeatherData({ currentWeather: currentWeatherResponse.data, futureWeather: futureWeatherResponse.data });
    } catch (error) {
      console.log(error);
    }
  }

  console.log("weatherData");
  console.log(weatherData);

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
