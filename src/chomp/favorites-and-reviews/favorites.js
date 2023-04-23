import React, { useState } from "react";
import Chomp from "..";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingBar from "../reusable-components/loading-bar";
import { findLikedRxs } from "../../services/rxs/rxs-service";
import { useNavigate } from "react-router";

const Favorties = () => {
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
    <Chomp activeLink="login">
      {currentUser && (<h1 className="mt-2">@{currentUser.username}'s Favorites</h1>)}
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
    </Chomp>
  );
};

export default Favorties;
