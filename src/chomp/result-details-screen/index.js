import React, { useEffect, useState } from "react";
import SearchRxs from "../search-rxs";
import { useParams } from "react-router";
import { findRxDetails } from "../../services/rxs/rxs-service";

const ResultDetailsScreen = () => {
  const { rxid } = useParams();
  const [rxDetails, setRxDetails] = useState({});
  const getRxDetails = async () => {
    const response = await findRxDetails(rxid);
    setRxDetails(response);
  }
  useEffect(() => {
    getRxDetails();
  }, []);
  return (
    <>
      <SearchRxs />
      <h1>{rxDetails.name}</h1>
    </>
  );
};

export default ResultDetailsScreen;
