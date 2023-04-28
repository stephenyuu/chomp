import React from "react";
import SearchRxs from "../search-rxs";
import "./index.css";
import Chomp from "..";

const SearchRxScreen = () => {
  return (
    <Chomp activeLink="searchRxs">
      <h3 className="fw-bold mt-3">Explore the Restaurant Scene</h3>
      <SearchRxs />
    </Chomp>
  );
};

export default SearchRxScreen;
