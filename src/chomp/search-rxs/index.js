import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findRxsThunk } from "../../services/rxs/rxs-thunk";
import { useNavigate } from "react-router";

const SearchRxs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rxSearchCriteria, setRxSearchCriteria] = useState({
    term: null,
    location: null,
    price: 1,
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const getRxs = async () => {
    setButtonDisabled(true);
    dispatch(findRxsThunk(rxSearchCriteria));
    setButtonDisabled(false);
    navigate("/search")
  };
  return (
    <form className="d-flex justify-content-center">
      <div className="form-group">
        <label htmlFor="search-term-input" className="form-label">
          Find
        </label>
        <input
          onChange={(e) => {
            setRxSearchCriteria({
              ...rxSearchCriteria,
              term: e.target.value,
            });
          }}
          id="search-term-input"
          type="text"
          placeholder="Chinese food, fancy restaurant, delivery"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="location-input" className="form-label">
          Location
        </label>
        <input
          onChange={(e) => {
            setRxSearchCriteria({
              ...rxSearchCriteria,
              location: e.target.value,
            });
          }}
          id="location-input"
          type="text"
          placeholder="address, neighborhood, city, state, zip code"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price-range-input" className="form-label">
          Price Range
        </label>
        <select
          onChange={(e) => {
            setRxSearchCriteria({
              ...rxSearchCriteria,
              price: parseInt(e.target.value),
            });
          }}
          id="price-range-input"
          className="form-select"
        >
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>
      <button
        disabled={buttonDisabled}
        onClick={getRxs}
        type="button"
        className="btn btn-primary align-self-end"
      >
        Search
      </button>
    </form>
  );
};

export default SearchRxs;
