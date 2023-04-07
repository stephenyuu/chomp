import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchRxs = () => {
  const navigate = useNavigate();
  const [searchTerms, setSearchTerms] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState("");
  const submitSearch = () => {
    setButtonDisabled(true);
    navigate("/search?" + new URLSearchParams(searchTerms));
    setButtonDisabled(false);
  };

  return (
    <form className="d-flex justify-content-center">
      <div className="form-group">
        <label htmlFor="search-term-input" className="form-label">
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
      <div className="form-group">
        <label htmlFor="location-input" className="form-label">
          Location
        </label>
        <input
          onChange={(e) => {
            setSearchTerms({ ...searchTerms, location: e.target.value });
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
        disabled={buttonDisabled}
        onClick={submitSearch}
        type="button"
        className="btn btn-primary align-self-end"
      >
        Search
      </button>
    </form>
  );
};

export default SearchRxs;
