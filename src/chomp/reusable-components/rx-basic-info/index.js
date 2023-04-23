import React from "react";
import RxCuisines from "../rx-cuisines";
import RxStarRatings from "../rx-rating-stars";
import "./rx-info-styles.css";

const RxBasicInfo = ({ rxDetails }) => {
  return (
    <div className="wd-rx-info-text">
      <h3 className="wd-rx-name fw-bold">{rxDetails.name}</h3>
      <div>
        <RxCuisines cuisines={rxDetails.categories} />
        <RxStarRatings rating={rxDetails.rating} />
        <div className="badge bg-light">{rxDetails.price}</div>
      </div>
    </div>
  );
};

export default RxBasicInfo;