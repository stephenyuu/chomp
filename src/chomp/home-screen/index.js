import React from "react";
import Chomp from "..";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import SearchRxs from "../search-rxs";

const HomeScreen = () => {

  const { currentUser } = useSelector((state) => state.users);


  return (
    <Chomp class="align-self-center" activeLink="">
      <h1>Chomp</h1>
      <SearchRxs />
    </Chomp>
  );
};

export default HomeScreen;
