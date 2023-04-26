import React from "react";
import Chomp from "..";
import { useSelector } from "react-redux";

const MyReviewsScreen = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <Chomp activeLink="login">
      {currentUser.isReviewer ? (
        <h1 className="mt-2">My Reviews</h1>
      ) : (
        <div class="alert alert-dismissible alert-info">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
          ></button>
          <strong>Heads up!</strong> This{" "}
          <a href="#" class="alert-link">
            alert needs your attention
          </a>
          , but it's not super important.
        </div>
      )}
    </Chomp>
  );
};

export default MyReviewsScreen;
