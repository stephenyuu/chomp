import React from "react";
import SearchRxs from "../search-rxs";
import Chomp from "..";
import { useState } from "react";

const HomeScreen = () => {


  return (
    <Chomp activeLink="">
        <SearchRxs />
    </Chomp>
  );
};

export default HomeScreen;
