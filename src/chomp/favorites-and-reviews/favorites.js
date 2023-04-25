import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingBar from "../reusable-components/loading-bar";
import { findLikedRxs } from "../../services/rxs/rxs-service";
import { useNavigate } from "react-router";
import LoadingBar from "../reusable-components/loading-bar";
import Chomp from "..";

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
      <h1>Favorites Page</h1>
      <div className="mt-3">
        {loading && <LoadingBar />}
        {!loading && (
          <>
            <div className="mt-3">
              {/* <SearchResultsCarousel rxs={results} /> */}
              {results.map((rx) => (
                <>
                  <h1>{rx.name}</h1>
                  <button
                    onClick={() => seeMoreDetails(rx.rxId)}
                    className="btn btn-secondary align-self-center wd-see-more"
                  >
                    See more
                  </button>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </Chomp>
  );
};

export default Favorties;
