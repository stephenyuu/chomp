import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findRxDetails } from "../../services/rxs/rxs-service";
import Chomp from "..";
import SearchRxs from "../search-rxs";
import ImageCarousel from "./image-carousel";
import LoadingBar from "../search-results-screen/loading-bar";
import RxCuisines from "../search-results-screen/rx-cuisines";
import RxStarRatings from "../search-results-screen/rx-rating-stars";
import "../../styles/rx-info-styles.css";

const ResultDetailsScreen = () => {
  const { rxid } = useParams();
  const [loading, setLoading] = useState(true);
  const [rxDetails, setRxDetails] = useState({});
  const getRxDetails = async () => {
    setLoading(true);
    const response = await findRxDetails(rxid);
    setRxDetails(response);
    setLoading(false);
  };
  useEffect(() => {
    getRxDetails();
  }, []);

  return (
    <Chomp activeLink="searchRxs">
      <SearchRxs />
      <div className="mt-3">
        {loading && <LoadingBar />}
        {!loading && (
          <div className="d-flex">
            <div className="wd-rx-card-text">
              <h1 className="wd-rx-name fw-bold">{rxDetails.name}</h1>
              <div className="wd-rx-card-text d-flex">
                <RxCuisines cuisines={rxDetails.categories} />
                <RxStarRatings rating={rxDetails.rating} />
                <div className="badge bg-light">{rxDetails.price}</div>
              </div>
              <div>

              </div>
            </div>
            <ImageCarousel rxPhotos={rxDetails.photos} />
          </div>
        )}
      </div>
    </Chomp>
  );
};

export default ResultDetailsScreen;
