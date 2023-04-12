import React from "react";
import { useNavigate } from "react-router";
import SearchRxs from "../search-rxs";

const HomeScreen = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <>
        <SearchRxs />
        <button 
          onClick={navigateLogin}
          type="button"
          className="btn btn-primary mt-3">
          Login
        </button>
    </>
  );
};

export default HomeScreen;
