import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./index.css"


const HomeScreen = () => {

  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const clickSearchRx = async () => {
    navigate("/searchRxs");
  };

  return (
    <Chomp class="" activeLink="">
      <div className="home-container">
        <h1 className="home-title">CHOMP</h1>
        {currentUser ? (<h2>Welcome {currentUser.firstName}!</h2>) : (<h2>Welcome!</h2>)}
        <button
          className="home-button"
          type="button"
          onClick={clickSearchRx}
        >
          Start Chomping
        </button>
      </div>
    </Chomp>
  );
};

export default HomeScreen;