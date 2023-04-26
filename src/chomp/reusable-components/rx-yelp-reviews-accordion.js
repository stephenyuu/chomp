import React, { useState } from "react";

const RxYelpReviewsAccordion = ({ rxId }) => {
  const [loading, setLoading] = useState(false);
  const [rxReviews, setRxReviews] = useState([]);
  

  return (
    <div className="accordion" id="reviewsAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="reviewsHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Notable Yelp Reviews
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="reviewsHeading"
          data-bs-parent="#reviewsAccordion"
        >
          <div className="accordion-body">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RxYelpReviewsAccordion;
