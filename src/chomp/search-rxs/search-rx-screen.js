import React from "react";
import SearchRxs from "../search-rxs";
import "./index.css";
import Chomp from "..";

const SearchRxScreen = () => {
  return (
    <Chomp activeLink="searchRxs">
      <SearchRxs />
    </Chomp>
  );
};

export default SearchRxScreen;
