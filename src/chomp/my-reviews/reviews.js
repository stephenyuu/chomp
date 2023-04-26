import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import LoadingBar from "../reusable-components/loading-bar";
import { findRxReviewsById } from "../../services/reviews/reviews-service";

const ReviewsList = ({user}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const getReviews = async () => {
    setLoading(true);
    const response = await findRxReviewsById(user._id);
    console.log(response)
    setResults(response);
    setLoading(false);
  };


  useEffect(() => {
    if (user) {
        getReviews();
    } else {
      console.log("error: must be logged in");
    }
  }, [user]);
  return (
    <div className="mt-3">
        {loading && <LoadingBar />}
        {!loading && (
          <>
            <div className="mt-3">
              {results.map((review) => (
                <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                    <div>
                  <h3>{review.rxName}</h3>
                  <p>{review.review}</p>
                  </div>
                </li>
                </ul>
              ))}
            </div>
          </>
        )}
      </div>
  );
};

export default ReviewsList;
