import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import Search from "../components/Search";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";


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
      <div className={classes.weatherContainer}>
        <WeatherCard
          currentWeather={weatherData.currentWeather}
        />
        <Forecast 
          forecast={weatherData.forecast.daily.slice(1)} 
        />
      </div>
    </div>
  );
}


const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  },
  weatherContainer: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  weatherTodayContainer: {
    display: "flex",
    justifyContent: "center",
    background: "blue",
  },
  weatherIcon: {
    height: "300px",
    width: "300px"
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