import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import ReviewsList from "./reviews";

const ReviewsScreen = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <Chomp activeLink="login">
      <h3 className="mt-3 fw-bold">My Reviews</h3>
      {currentUser && <ReviewsList user={currentUser} />}
    </Chomp>
  );
};

export default ReviewsScreen;
