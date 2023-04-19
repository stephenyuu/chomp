import React, { useState } from "react";
import SearchRxs from "../search-rxs";
import { useParams } from "react-router";

const ResultDetailsScreen = () => {
  const { rxid } = useParams();
  const [details, setDetails] = useState([]);
  return (
    <>
      <SearchRxs />
      {rxid}
    </>
  );
};

export default ResultDetailsScreen;
