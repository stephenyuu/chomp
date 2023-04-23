import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { findRxs } from "../../services/rxs/rxs-service";
import SearchResultsCarousel from "./search-results-carousel";
import SearchRxs from "../search-rxs";
import LoadingBar from "../reusable-components/loading-bar";
import Chomp from "..";

const SearchResultsScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const getRxs = async () => {
    setLoading(true);
    const response = await findRxs(searchParamsObject);
    setResults(response);
    setLoading(false);
  };
  useEffect(() => {
    getRxs();
  }, [searchParams]);
  return (
    <Chomp activeLink="searchRxs">
      <SearchRxs />
      <div className="mt-3">
        {loading && <LoadingBar />}
        {!loading && (
          <>
            <h1 className="mb-0 fw-bold">Restaurants</h1>
            <div className="mt-3">
              <SearchResultsCarousel rxs={results} />
            </div>
          </>
        )}
      </div>
    </Chomp>
  );
};

export default SearchResultsScreen;
