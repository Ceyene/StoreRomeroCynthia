//dependencies
import React from "react";
//styled components
import { StyledFilter, StyledSelect, StyledOption } from "./Filter.elements";

const Filter = ({ data, name, value, selectHandler }) => {
  return (
    <StyledFilter>
      <StyledSelect value={value} onChange={selectHandler} name={name}>
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
