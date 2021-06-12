import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Item from "../components/Item";
import Pin from "../assets/images/pin.png";
import TempertureIcon from "../assets/images/temp.png";
import SunriseIcon from "../assets/images/sunrise.png";
import SunsetIcon from "../assets/images/sunset.png";
import WindIcon from "../assets/images/wind.png";
import HumidityIcon from "../assets/images/humidity.png";
import CloudIcon from "../assets/images/clouds.png";
import { returnWeatherIcon } from "../utilities/returnWeatherIcon";


const WeatherCard = ({ currentWeather }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <div className={classes.location}>
          <img className={classes.pin} src={Pin} alt="" />
          <p className={classes.locationText}>{currentWeather.name}, {currentWeather.sys.country}</p>
        </div>
        <div className={classes.tempertureContainer}>
          <img className={classes.tempertureIcon} alt="" src={TempertureIcon} />
          <div>
            <p className={classes.temperture}>{currentWeather.main.temp}°</p>
            <p className={classes.feelsLike}>feels like {currentWeather.main.feels_like}°</p>
          </div>
        </div>
      </div>
      <div className={classes.centerContainer}>
        <img className={classes.weatherIcon} alt="" src={returnWeatherIcon(currentWeather.weather[0].id)} />
        <p className={classes.weather}>{currentWeather.weather[0].main}</p>
      </div>
      <div className={classes.rightContainer}>
        <Item icon={SunriseIcon} text={new Date (currentWeather.sys.sunrise).toLocaleTimeString("en-US")} />
        <Item icon={SunsetIcon} text={new Date (currentWeather.sys.sunset).toLocaleTimeString("en-US")} />
        <Item icon={WindIcon} text={`${currentWeather.wind.speed} miles/hour`} />
        <Item icon={HumidityIcon} text={`${currentWeather.main.humidity}%`} />
        <Item icon={CloudIcon} text={`${currentWeather.clouds.all}%`} />
      </div>
    </div>
  );
}


const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
    color: "white",
    width: "80%",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  location: {
    display: "flex",
    alignItems: "center"
  },
  tempertureContainer: {
    display: 'flex',
    alignItems: "center",
  },
  locationText: {
    fontWeight: 600,
    fontSize: "35px",
    marginLeft: "10px",
    margin: 0
  },
  pin: {
    width: "25px",
    height: "35px",
  },
  tempertureIcon: {
    marginRight: "10px",
    width: "30px",
    height: "80px",
  },
  temperture: { 
    fontWeight: 600,
    fontSize: "35px",
    margin: 0
  },
  feelsLike: {
    fontWeight: 600,
    margin: 0,
    color: "#A5D8FF"
  },
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  weatherIcon: {
    height: "300px",
    width: "300px"
  },
  weather: {
    fontSize: "30px",
    margin: 0
  },
  rightContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
});

export default WeatherCard;
