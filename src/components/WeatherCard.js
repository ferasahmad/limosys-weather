import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Pin from "../assets/images/pin.png";


const WeatherCard = ({ location, temperture, feelsLike, weather, sunrise, sunset }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div>
          <div>
            <img className={classes.pin} src={} alt="" />
            <p>{location}</p>
          </div>
          <p>{temperture}°</p>
          <p>{feelsLike}°</p>
        </div>
        <div>
          <img className={classes.weatherIcon} alt="" src={"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png"} />
          <p>{weather}</p>
        </div>
        <div>
          <p>{sunrise}</p>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
}


const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    background: "blue",
  },
  weatherIcon: {
    height: "300px",
    width: "300px"
  },
});

export default WeatherCard;
