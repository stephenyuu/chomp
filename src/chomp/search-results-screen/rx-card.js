import React from "react";
import RxStarRatings from "./rx-rating-stars";
import RxCuisines from "./rx-cuisines";
import { useNavigate } from "react-router";

const RxCard = ({ rx }) => {
  const navigate = useNavigate();
  const seeMoreDetails = () => {
    navigate(`/search/${rx.id}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="wd-rx-card-width position-relative">
        <img
          src={rx.image_url}
          className="img-fluid border border-5 border-secondary rounded"
        />
        <div className="wd-like-icon">
          <i class="bi bi-heart text-secondary fw-bold"></i>
        </div>
      </div>
      <div className="ms-2 d-flex justify-content-around wd-rx-card-width">
        <div className="wd-rx-card-text">
          <div className="wd-rx-name fw-bold">{rx.name}</div>
          <RxCuisines cuisines={rx.categories} />
          <RxStarRatings rating={rx.rating} />
          <div className="badge bg-light">{rx.price}</div>
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
