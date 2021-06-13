import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import RingLoader from "react-spinners/ClipLoader";

const WeatherCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <RingLoader size={100} color="#A5D8FF" />
    </div>
  );
}


const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  }
});

export default WeatherCard;
