//dependencies
import React from "react";
//styled components
import { StyledFilter, StyledSelect, StyledOption } from "./Filter.elements";

//it renders each filter
const Filter = ({ data, name, value, handleFilters }) => {
  return (
    <StyledFilter>
      <StyledSelect value={value} onChange={handleFilters} name={name}>
        {data.map((item, index) => (
          <StyledOption value={item} key={index}>
            {item}
          </StyledOption>
        ))}
      </StyledSelect>
    </StyledFilter>
  );
};

export default Filter;
