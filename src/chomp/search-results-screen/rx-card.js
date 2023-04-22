import React from "react";
import RxStarRatings from "./rx-rating-stars";
import RxCuisines from "./rx-cuisines";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const RxCard = ({ rx }) => {
  const { currentUser } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const seeMoreDetails = () => {
    navigate(`/search/${rx.id}`);
  };

  /* const handleLikeClick = () => {
    
    // determine if the restaurant exists in the likes schema of the user
    dispatch(
      updateUserThunk({
        ...currentUser,
      })
    );
  }; */

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="wd-rx-card-width position-relative">
        <img
          src={rx.image_url}
          className="img-fluid border border-5 border-secondary rounded"
        />
        {currentUser && (
          <div className="wd-like-icon" onClick={() => console.log("test")}>
            <i class="bi bi-heart "></i>
          </div>
        )}
      </div>
      <div className="ms-2 d-flex justify-content-around wd-rx-card-width">
        <div className="wd-rx-card-text">
          <div className="wd-rx-name">{rx.name}</div>
          <RxCuisines cuisines={rx.categories} />
          <RxStarRatings rating={rx.rating} />
          <div className="badge bg-light wd-badge">{rx.price}</div>
        </div>
        <button
          onClick={seeMoreDetails}
          className="btn btn-secondary align-self-center wd-see-more"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default RxCard;
