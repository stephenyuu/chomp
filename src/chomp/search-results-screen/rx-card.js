import React from "react";

const RxCard = ({ rx }) => {
  return (
    <div>
      <img className="card-img-top wd-rx-card-img" src={rx.image_url} />
      <div className="card-body">
        <h5></h5>
      </div>
    </div>
  );
};

export default RxCard;
