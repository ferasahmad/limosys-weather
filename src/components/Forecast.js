import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import { returnWeatherIcon } from "../utilities/returnWeatherIcon";


const Forecast = ({ forecast }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {
        forecast.map((forecast) => (
          <div className={classes.day} key={forecast.dt}>
            <img 
              className={classes.weatherIcon} 
              src={returnWeatherIcon(forecast.weather[0].id)} 
              alt="" 
            />
            <p className={classes.temp}>
              <span className={classes.lowTemp}>{forecast.temp.min}°</span>
               {" "}/{" "}
              <span className={classes.highTemp}>{forecast.temp.max}°</span>
            </p>
          </div>
        ))
      }
    </div>
  );
}


const useStyles = makeStyles({
  container: {
    marginTop: "50px",
    display: "flex",
  },
  day: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: " rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    margin: "10px",
    width: "150px",
    height: "150px"
  },
  lowTemp: {
    color: "#A5D8FF",
  },
  highTemp: {
    color: "#F24236",
  },
  weatherIcon: {
    width: "70px",
    height: "70px",
  },
  temp: {
    color: "white",
    fontWeight: 600
  }
});

export default Forecast;