import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import Search from "../components/Search";
import SearchIcon from "../assets/images/search-icon.png";


const SearchPage = ({ searchInputValue, setSearchInputValue, onClickSearch }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3 className={classes.h3}>Find the weather of your town!</h3>
      <Search 
        searchInputValue={searchInputValue} 
        setSearchInputValue={(value) => setSearchInputValue(value)}
        onClickSearch={onClickSearch}
      />
    </div>
  );
}


const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  h3: {
    color: "white"
  },
});

export default SearchPage;
