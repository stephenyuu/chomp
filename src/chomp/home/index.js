import React from "react";
import SearchRestaurant from "../search-restaurants";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
        <SearchRestaurant />
        <button type="button" className="btn btn-secondary mt-3">Login</button>
    </div>
  );
};

export default Home;
