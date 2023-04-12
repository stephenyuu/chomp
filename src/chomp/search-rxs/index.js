import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./index.css";

const SearchRxs = () => {
  const navigate = useNavigate();
  const [searchTerms, setSearchTerms] = useState({});
  const [priceDropdown, setPriceDropdown] = useState("");
  const validSubmit = () => {
    return searchTerms.location && searchTerms.location.length !== 0;
  }
  const submitSearch = () => {
    navigate("/search?" + new URLSearchParams(searchTerms));
  };
  return (
    <form className="d-flex justify-content-center mt-3">
      <div className="form-group wd-input-flex">
        <label htmlFor="search-term-input" className="form-label fw-bold">
          Find
        </label>
        <input
          onChange={(e) => {
            setSearchTerms({ ...searchTerms, term: e.target.value });
          }}
          id="search-term-input"
          type="text"
          placeholder="Chinese food, fancy restaurant, delivery"
          className="form-control"
        />
      </div>
      <div className="form-group ms-3 wd-input-flex">
        <label htmlFor="location-input" className="form-label fw-bold">
          Location
        </label>
        <input
          onChange={(e) => {
            setSearchTerms({ ...searchTerms, location: e.target.value });
          }}
          id="location-input"
          type="text"
          placeholder="address, neighborhood, city, state, zip code"
          className="form-control"
        />
      </div>
      <div className="form-group ms-3">
        <label htmlFor="price-range-input" className="form-label fw-bold">
          Price
        </label>
        <select
          onChange={(e) => {
            setPriceDropdown(e.target.value);
            setSearchTerms({ ...searchTerms, price: e.target.value });
          }}
          value={priceDropdown}
          id="price-range-input"
          className="form-select"
        >
          <option value="" disabled hidden>
            select price
          </option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>
      <button
        disabled={!validSubmit()}
        onClick={submitSearch}
        type="button"
        className="btn btn-primary align-self-end ms-3"
      >
        Search
      </button>
    </form>
  );
};

export default SearchRxs;
