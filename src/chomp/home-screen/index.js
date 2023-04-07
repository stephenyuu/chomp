import React from "react";
import SearchRxs from "../search-rxs";
import { useNavigate } from "react-router";

const HomeScreen = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column align-items-center">
        <SearchRxs />
        <button 
          onClick={navigateLogin}
          type="button"
          className="btn btn-primary">
          Login
        </button>
    </div>
  );
};

export default HomeScreen;
