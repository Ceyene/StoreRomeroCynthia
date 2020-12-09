//dependencies
import React from "react";

const Pagination = () => {
  return (
    <section className="Pagination">
      <p className="PaginationInfo">16 of 32 products</p>
      <div className="Buttons">
        <button className="PaginationButton"> Prev </button>
        <button className="PaginationButton"> Next </button>
      </div>
    </section>
  );
};

export default Pagination;
