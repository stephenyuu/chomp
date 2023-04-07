import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchRxs from "../search-rxs";
import { useEffect, useState } from "react";
import { findRxs } from "../../services/rxs/rxs-service";
import "./index.css";
import RxCard from "./rx-card";
import { ClipLoader } from "react-spinners";

const SearchResultsScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [results, setResults] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRx, setCurrentRx] = useState({});
  const [loading, setLoading] = useState()
  const getRxs = async () => {
    const response = await findRxs(searchParamsObject);
    setResults(response);
  };
  useEffect(() => {
    if (searchParams) {
      getRxs();
    }
  }, [searchParams]);
  useEffect(() => {
    if (results.length > 0) {
      setCurrentRx(results[currentIndex]);
    }
  }, [results, currentIndex]);
  return (
    <>
      <SearchRxs />
      <div className="mt-3 d-flex justify-content-around align-items-center">
        <button className="btn btn-primary">Previous</button>
        {console.log(currentRx)}
        {Object.keys(currentRx).length !== 0 ? <RxCard rx={currentRx} /> : <ClipLoader/>}
        <button className="btn btn-primary">Next</button>
      </div>
    </>
  );
};

export default SearchResultsScreen;
