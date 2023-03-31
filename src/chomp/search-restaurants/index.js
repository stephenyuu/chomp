import React from "react";

const SearchRestaurant = () => {
  return (
    <form className="d-flex justify-content-center">
        <div className="form-group">
          <label for="search-term-input" className="form-label">
            Find
          </label>
          <input
            id="search-term-input"
            type="text"
            placeholder="Chinese food, fancy restaurant, delivery"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="location-input" className="form-label">
            Location
          </label>
          <input
            id="location-input"
            type="text"
            placeholder="address, neighborhood, city, state, zip code"
            className="form-control"
          />
        </div>
        <div class="form-group">
          <label for="price-range-input" class="form-label">
            Price Range
          </label>
          <select id="price-range-input" className="form-select">
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
            <option>$$$$</option>
          </select>
        </div>
      <button type="button" className="btn btn-primary align-self-end">Search</button>
    </form>
  );
};

export default SearchRestaurant;
