//dependencies
import React from "react";
//styled components
import { StyledFilter } from "./Filter.elements";

//it renders each filter button
const Filter = ({ name, handleFilter }) => {
  return <StyledFilter onClick={handleFilter}>{name}</StyledFilter>;
};

export default Filter;
