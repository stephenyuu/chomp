import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { findRxs } from "../../services/rxs/rxs-service";
import SearchResultsCarousel from "./search-result-carousel";
import SearchRxs from "../search-rxs";
import "./index.css";

const SearchResultsScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [results, setResults] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRx, setCurrentRx] = useState({});
  const getRxs = async () => {
    const response = await findRxs(searchParamsObject);
    setResults(response);
  };
  useEffect(() => {
    setCurrentRx({});
    getRxs();
  }, [searchParams]);
  useEffect(() => {
    if (results.length > 0) {
      setCurrentRx(results[currentIndex]);
    }
  }, [results, currentIndex]);
  return (
    <>
      <SearchRxs />
      <h1 className="mt-3 mb-0 fw-bold">Restaurants</h1>
      <div className="mt-3 d-flex justify-content-center align-items-center">
        {Object.keys(currentRx).length !== 0 ? <SearchResultsCarousel rxs={results}/> : <ClipLoader/>}
      </div>
    </>
  );
};

export default SearchResultsScreen;
