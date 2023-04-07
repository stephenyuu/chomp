import { useSearchParams } from "react-router-dom";
import SearchRxs from "../search-rxs";
import { useEffect, useState } from "react";
import { findRxs } from "../../services/rxs/rxs-service";

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
      <div className="mt-3">
        {currentRx && (
          <div className="card">
            <img
              className="card-img-top"
              src={currentRx.image_url}
              alt={currentRx.name}
            />
            <div className="card-body">
              <h5 className="card-title">{currentRx.name}</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResultsScreen;
