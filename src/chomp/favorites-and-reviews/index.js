import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import FavortiesList from "./favorites";

const Favorties = () => {
  const { currentUser } = useSelector((state) => state.users);
  
  return (
    <Chomp activeLink="login">
      {currentUser && (<h1 className="mt-2">Your Favorites</h1>)}
      <FavortiesList/>
    </Chomp>
  );
};

export default Favorties;
