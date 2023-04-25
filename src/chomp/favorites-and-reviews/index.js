import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import FavoritesList from "./favorites";

const FavoritesScreen = () => {
  const { currentUser } = useSelector((state) => state.users);
  
  return (
    <Chomp activeLink="login">
      {currentUser && (<h1 className="mt-2">Your Favorites</h1>)}
      <FavoritesList/>
    </Chomp>
  );
};

export default FavoritesScreen;
