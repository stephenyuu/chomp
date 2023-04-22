import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { findRxs } from "../../services/rxs/rxs-service";
import SearchResultsCarousel from "../search-results-screen/search-results-carousel"
import SearchRxs from "../search-rxs";
import LoadingBar from "../search-results-screen/loading-bar";
import Chomp from "..";

const GroupSessionScreen = () => {
  const { groupCode } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [results, setResults] = useState([]);

  const getRxs = async () => {
    const response = await findRxs(searchParamsObject);
    setResults(response);
  };
  useEffect(() => {
    getRxs();
  }, []);

  return (
    <Chomp activeLink="">
      <h1>{groupCode}</h1>
      <h1 className="mt-3 mb-0 fw-bold">Restaurants</h1>


      <div className="mt-3">
        {Object.keys(results).length !== 0 ? (
          <SearchResultsCarousel rxs={results} />
        ) : (
          <LoadingBar />
        )}
      </div>


    </Chomp>
  );
};

export default GroupSessionScreen;
