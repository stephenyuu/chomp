import React from "react";
import SearchRxs from "../search-rxs";

const HomeScreen = () => {
  return (
    <div className="d-flex flex-column align-items-center">
        <SearchRxs />
        <button type="button" className="btn btn-secondary mt-3">Login</button>
    </div>
  );
};

export default HomeScreen;
