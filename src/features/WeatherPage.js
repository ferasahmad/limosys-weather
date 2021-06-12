import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import Search from "../components/Search";
import WeatherCard from "../components/WeatherCard";


const WeatherPage = ({ weatherData, onClickSearch, searchInputValue, setSearchInputValue }) => {
  const classes = useStyles();


  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2 className={classes.h2}>LimoSys Weather</h2>
        <Search 
          searchInputValue={searchInputValue} 
          setSearchInputValue={(value) => setSearchInputValue(value)}
          onClickSearch={onClickSearch}
        />
      </header>
      <div>
        <WeatherCard
          location={weatherData.currentWeather.name}
          temperture={weatherData.currentWeather.main.temp}
          feelsLike={weatherData.currentWeather.main.feels_like}
          weather={weatherData.currentWeather.weather[0].description}
          sunrise={new Date (weatherData.currentWeather.sys.sunrise).toLocaleTimeString("en-US")}
          sunset={new Date (weatherData.currentWeather.sys.sunset).toLocaleTimeString("en-US")}
        />
        <div>
      </div>
      </div>
    </div>
  );
}


const useStyles = makeStyles({
  weatherTodayContainer: {
    display: "flex",
    justifyContent: "center",
    background: "blue",
  },
  weatherIcon: {
    height: "300px",
    width: "300px"
  },
  container: {

  },
  h2: {
    color: "white",
    fontSize: "30px",
    margin: 0
  },
  header: {
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  }
});

export default WeatherPage;