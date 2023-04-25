<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "../reusable-components/loading-bar";
=======
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
>>>>>>> 921b78e66bb5506a238a74eb9da961f8b8ad7ba5
import { findLikedRxs } from "../../services/rxs/rxs-service";
import { useNavigate } from "react-router";
import LoadingBar from "../reusable-components/loading-bar";
import Chomp from "..";

<<<<<<< HEAD
const FavortiesList = () => {
=======
const Favorites = () => {
>>>>>>> 921b78e66bb5506a238a74eb9da961f8b8ad7ba5
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const getLikedRxs = async () => {
    setLoading(true);
    const response = await findLikedRxs(currentUser._id);
    setResults(response);
    setLoading(false);
  };

  const seeMoreDetails = (rxid) => {
    navigate(`/search/${rxid}`);
  };

  useEffect(() => {
    if (currentUser) {
      getLikedRxs();
    } else {
      console.log("error: must be logged in");
    }
  }, [currentUser]);
  return (
    <div className="mt-3">
        {loading && <LoadingBar />}
        {!loading && (
          <>
            <div className="mt-3">
              {results.map((rx) => (
                <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                  <h3>{rx.name}</h3>
                  <button
                    onClick={() => seeMoreDetails(rx.rxId)}
                    className="btn btn-primary rounded-pill"
                  >
                    See more
                  </button>
                </li>
                </ul>
              ))}
            </div>
          </>
        )}
      </div>
  );
};

<<<<<<< HEAD
export default FavortiesList;
=======
export default Favorites;
>>>>>>> 921b78e66bb5506a238a74eb9da961f8b8ad7ba5
