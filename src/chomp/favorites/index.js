import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import FavoritesList from "./favorites";

const FavoritesScreen = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <Chomp activeLink="login">
      <h3 className="mt-3 fw-bold">My Favorites</h3>
      {currentUser && <FavoritesList user={currentUser} />}
    </Chomp>
  );
};

export default FavoritesScreen;
