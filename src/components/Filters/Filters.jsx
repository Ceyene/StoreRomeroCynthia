//dependencies
import React from "react";

const Filters = () => {
  return (
    <section className="Filters">
      <div className="PaginationContainer">
        <p className="PaginationInfo">16 of 32 products</p>
      </div>
      <h5 className="TertiaryTitle">Sort by:</h5>
      <div className="SelectContainer">
        <select>
          <option value="0">Prices</option>
          <option value="1">Lowest Price</option>
          <option value="2">Highest Price</option>
        </select>
      </div>
      <div className="SelectContainer">
        <select>
          <option value="0">Categories</option>
        </select>
      </div>
      <button className="ResetButton">Reset filters</button>
    </section>
  );
};

export default Filters;
