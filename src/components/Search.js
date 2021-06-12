import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import SearchIcon from "../assets/images/search-icon.png";


const Search = ({ searchInputValue, setSearchInputValue, onClickSearch }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <input value={searchInputValue} onChange={(value) => setSearchInputValue(value.target.value)} autoFocus className={classes.input} placeholder="Town name, city, or state." />
      <Button onClick={onClickSearch} variant="contained" className={classes.button}>
        <img src={SearchIcon} alt="" className={classes.icon} />
      </Button>
    </div>
  );
}


const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    height: "30px",
    width: "30px"
  },
  input: {
    width: "450px",
    height: "54px",
    borderRadius: "4px 0 0 4px",
    border: "none",
    padding: "5px 10px 5px 10px",
    boxSizing: "border-box",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    height: "54px",
    borderRadius: "0 4px 4px 0",
    background: "#A5D8FF",
    "&:hover": {
      backgroundColor: "#A5D8FF"
    }
  }
});

export default Search;