import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const Item = ({ icon, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <img className={classes.itemIcon} src={icon} alt="" />
      <p className={classes.itemText}>{text}</p>
    </div>
  );
}


const useStyles = makeStyles({
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px"
  },
  itemIcon: {
    width: "40px", 
    height: "40px",
    marginRight: "20px",
  },
  itemText: {
    margin: 0,
    fontSize: "20px",
  },
});

export default Item;
