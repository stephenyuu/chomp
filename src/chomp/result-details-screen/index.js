import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findRxDetails } from "../../services/rxs/rxs-service";
import Chomp from "..";
import SearchRxs from "../search-rxs";
import ImageCarousel from "./image-carousel";
import LoadingBar from "../reusable-components/loading-bar";
import RxBasicInfo from "../reusable-components/rx-basic-info/";
import RxHours from "../reusable-components/rx-hours";

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
          <div className="d-flex flex-column">
            <RxBasicInfo rxDetails={rxDetails} />
            <div className="mt-3 d-flex">
              <ImageCarousel rxPhotos={rxDetails.photos} />
              <table className="table table-hover">
                <tbody>
                  <tr className="table-default">
                    <th scope="row">Address</th>
                    <td>
                      {rxDetails.location.display_address[0] +
                        ", " +
                        rxDetails.location.display_address[1]}
                    </td>
                  </tr>
                  <tr className="table-default">
                    <th scope="row">Phone Number</th>
                    <td>{rxDetails.display_phone}</td>
                  </tr>
                  <tr className="table-default">
                    <td colSpan={2}>
                      <RxHours hours={rxDetails.hours} />
                    </td>
                  </tr>
                  <tr className="table-default">
                    <th colspan={2} scope="row"><a href={rxDetails.url}>Link to Yelp Page</a></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Chomp>
  );
};

export default ResultDetailsScreen;
