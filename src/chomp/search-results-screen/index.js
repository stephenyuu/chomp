import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { findRxs } from "../../services/rxs/rxs-service";
import SearchResultsCarousel from "./search-results-carousel";
import SearchRxs from "../search-rxs";
import LoadingBar from "./loading-bar";
import "./index.css";

const SearchResultsScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(Object.fromEntries(searchParams.entries()));
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [results, setResults] = useState([]);
  const getRxs = async () => {
    const response = await findRxs(searchParamsObject);
    setResults(response);
  };
  useEffect(() => {
    setResults([]);
    getRxs();
  }, [searchParams]);
  return (
    <>
      <SearchRxs />
      <h1 className="mt-3 mb-0 fw-bold">Restaurants</h1>
      <div className="mt-3">
        {Object.keys(results).length !== 0 ? (
          <SearchResultsCarousel rxs={results} />
        ) : (
          <LoadingBar />
        )}
      </div>
    </>
  );
};

export default SearchResultsScreen;
