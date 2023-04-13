import React from "react";
import RxStarRatings from "./rx-rating-stars";
import RxCuisines from "./rx-cuisines";

const RxCard = ({ rx }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img
        className="border border-5 border-secondary rounded wd-rx-card-width"
        src={rx.image_url}
      />
      <div className="mt-2 d-flex justify-content-between wd-rx-card-width">
        <div>
          <div className="wd-rx-name">{rx.name}</div>
          <RxCuisines cuisines={rx.categories} />
          <RxStarRatings rating={rx.rating} />
          <div className="mt-1 badge bg-light wd-badge">{rx.price}</div>
        </div>
        <button className="btn btn-secondary align-self-center wd-see-more">See more</button>
      </div>
    </div>
  );
};

export default RxCard;
