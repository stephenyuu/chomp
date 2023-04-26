import React, { useEffect, useState } from "react";
import { findRxYelpReviews } from "../../services/rxs/rxs-service";
import BarLoader from "react-spinners/BarLoader";

const RxYelpReviewsAccordion = ({ rxId }) => {
  const [loading, setLoading] = useState(false);
  const [rxReviews, setRxReviews] = useState([]);

  const getRxReviews = async () => {
    setLoading(true);
    const response = await findRxYelpReviews(rxId);
    setRxReviews(response.reviews);
    setLoading(false);
  };

  useEffect(() => {
    getRxReviews();
  }, []);

  return (
    <div className="accordion" id="reviewsAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="reviewsHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Notable Yelp Reviews
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="reviewsHeading"
          data-bs-parent="#reviewsAccordion"
        >
          <div className="accordion-body">
            <ul className="list-group list-group-flush">
              {loading && (
                <li className="list-group-item">
                  <BarLoader />
                </li>
              )}
              {!loading &&
                rxReviews.map((review) => (
                  <li className="list-group-item">
                    {review.text}{" - "}
                    <span className="fw-bold">{review.user.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RxYelpReviewsAccordion;
