import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findRxDetails } from "../../services/rxs/rxs-service";
import Chomp from "..";
import SearchRxs from "../search-rxs";
import ImageCarousel from "./image-carousel";
import LoadingBar from "../reusable-components/loading-bar";
import RxBasicInfo from "../reusable-components/rx-basic-info/";
import RxHoursAccordion from "../reusable-components/rx-hours-accordion";
import RxYelpReviewsAccordion from "../reusable-components/rx-yelp-reviews-accordion";

const ResultDetailsScreen = () => {
  const { rxId } = useParams();
  const [loading, setLoading] = useState(true);
  const [rxDetails, setRxDetails] = useState({});
  const getRxDetails = async () => {
    setLoading(true);
    const response = await findRxDetails(rxId);
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
          <div className="d-flex flex-column">
            <RxBasicInfo rxDetails={rxDetails} />
            <div className="mt-3 d-flex">
              <ImageCarousel rxPhotos={rxDetails.photos} />
              <ul className="list-group wd-additional-info-text">
                <li className="list-group-item">
                  <span className="fw-bold">Address</span>
                  <span className="float-end">
                    {rxDetails.location.display_address[0] +
                      ", " +
                      rxDetails.location.display_address[1]}
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Phone Number</span>
                  <span className="float-end">{rxDetails.display_phone}</span>
                </li>
                <li className="list-group-item">
                  <RxHoursAccordion hours={rxDetails.hours} />
                </li>
                <li className="list-group-item">
                  <a className="fw-bold" href={rxDetails.url}>
                    Link to Yelp Page
                  </a>
                </li>
                <li className="list-group-item">
                  <RxYelpReviewsAccordion rxId={rxId} />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Chomp>
  );
};

export default ResultDetailsScreen;
