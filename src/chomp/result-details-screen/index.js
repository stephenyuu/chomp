import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findRxDetails } from "../../services/rxs/rxs-service";
import Chomp from "..";
import SearchRxs from "../search-rxs";

const ResultDetailsScreen = () => {
  const { rxid } = useParams();
  const [rxDetails, setRxDetails] = useState({});
  const getRxDetails = async () => {
    const response = await findRxDetails(rxid);
    setRxDetails(response);
  };
  useEffect(() => {
    getRxDetails();
  }, []);
  return (
    <Chomp activeLink="">
      <SearchRxs />
      <h1>{rxDetails.name}</h1>
    </Chomp>
  );
};

export default ResultDetailsScreen;
