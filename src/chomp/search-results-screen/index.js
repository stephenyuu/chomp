import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const SearchResultsScreen = () => {
  const { rxs, loading } = useSelector((state) => state.rxs);
  const [index, setIndex] = useState(0);
  const [rxAtIndex, setRxAtIndex] = useState(rxs[index]);
  useEffect(() => setRxAtIndex(rxs[index]), [rxs, index]);
  return (
    <div>
      {loading && <ClipLoader color="FFA500" />}
      <div className="card">
        {console.log(rxAtIndex)}
      </div>
    </div>
  );
};

export default SearchResultsScreen;
