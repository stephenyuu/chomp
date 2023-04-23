import React from "react";

const RxStarRatings = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<i className="bi bi-star-fill"></i>);
    } else if (i - 0.5 === rating) {
      stars.push(<i className="bi bi-star-half"></i>);
    } else {
      stars.push(<i className="bi bi-star"></i>);
    }
  }
  return (
    <div className="mt-1 badge bg-light wd-badge">
      {stars}
    </div>
  );
};

export default RxStarRatings;
