import React, { useState, Fragment, useEffect } from "react";

import { getWeatherByName, getForecast, getWeatherByCoordinates } from "./api";
import SearchPage from "./features/SearchPage";
import WeatherPage from "./features/WeatherPage";
import LoadingPage from "./components/LoadingPage";
import useGeoLocation from "./hooks/useGeoLocation";


const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");
  const location = useGeoLocation();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if(location.loaded) {
      if(location.coordinates) {
        handleWeatherRequestByCoords(location.coordinates.lat, location.coordinates.lon);
      }
      setLoading(false)
    }
  },[location])

  const onClickSearch = () => {
    handleWeatherResponseByName();
    setSearchInputValue("");
  }

  const handleWeatherRequestByCoords = async (lat, lon) => {
    try {
      const weatherResponse = await getWeatherByCoordinates(lat, lon);
      const forecastResponse = await getForecast(lat, lon);
      setWeatherData({ currentWeather: weatherResponse.data, forecast: forecastResponse.data.daily });
    } catch (error) {
      console.log(error);
    }
  }

  const handleWeatherResponseByName = async () => {
    try {
      const weatherResponse = await getWeatherByName(searchInputValue);
      const forecastResponse = await getForecast(weatherResponse.data.coord.lat, weatherResponse.data.coord.lon);
      setWeatherData({ currentWeather: weatherResponse.data, forecast: forecastResponse.data.daily });
    } catch (error) {
      console.log(error);
      alert("Could not find location.")
    }
  };

  const renderContent = () => {
    if(loading){
      return <LoadingPage />
    } else {
      if(weatherData) {
        return (
          <WeatherPage
            weatherData={weatherData}
            onClickSearch={onClickSearch}
            searchInputValue={searchInputValue}
            setSearchInputValue={(value) => setSearchInputValue(value)}
          />
        )
      } else {
        return (
          <SearchPage 
            onClickSearch={onClickSearch}
            searchInputValue={searchInputValue}
            setSearchInputValue={(value) => setSearchInputValue(value)}
          />
        )
      }
    }
  }

  return (
    <Fragment>
      {renderContent()}
    </Fragment>
  );
}

export default App;
