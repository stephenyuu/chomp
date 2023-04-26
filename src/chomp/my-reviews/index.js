import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import ReviewsList from "./reviews";

const ReviewsScreen = () => {
  const { currentUser } = useSelector((state) => state.users);
  
  return (
    <Chomp activeLink="login">
      {currentUser && (<h1 className="mt-2">Your Reviews</h1>)}
      <ReviewsList/>
    </Chomp>
  );
};

export default ReviewsScreen;
