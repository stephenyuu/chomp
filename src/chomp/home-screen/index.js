import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./index.css";

const HomeScreen = () => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const clickSearchRx = async () => {
    navigate("/search-rxs");
  };

  return (
    <Chomp className="" activeLink="">
      <div className="wd-home-container">
        <h1 className="wd-home-title fw-bold">CHOMP</h1>
        {currentUser ? (
          <h2>Welcome {currentUser.firstName}!</h2>
        ) : (
          <h2>Welcome!</h2>
        )}
        <p className="wd-intro mt-1 mb-3">
          Discover your next favorite restaurant with Chomp - the user-friendly
          web app for browsing and exploring dining spots. Favorite the ones
          that catch your eye, or become a Nibbler and share your food
          experiences with others. Start exploring restaurant scene like never
          before!
        </p>
        <button
          className="wd-home-button"
          type="button"
          onClick={clickSearchRx}
        >
          Start Chomping!
        </button>
      </div>
    </Chomp>
  );
};

export default HomeScreen;
