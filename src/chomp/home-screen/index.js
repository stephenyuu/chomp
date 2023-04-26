import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./index.css"


const HomeScreen = () => {

  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const clickSearchRx = async () => {
    navigate("/search-rxs");
  };

  return (
    <Chomp className="" activeLink="">
      <div className="wd-home-container">
        <h1 className="wd-home-title">CHOMP</h1>
        {currentUser ? (<h2>Welcome {currentUser.firstName}!</h2>) : (<h2>Welcome!</h2>)}
        <button
          className="wd-home-button"
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