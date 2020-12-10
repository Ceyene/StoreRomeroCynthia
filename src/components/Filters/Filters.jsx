//dependencies
import React from "react";
//components
import Filter from "../Filter/Filter";
//styled components
import {
  FiltersContainer,
  PaginationContainer,
  ResetButton,
} from "./Filters.elements";
import { Title, PaginationInfo } from "../../globalStyles";

const Filters = ({ filters, selectHandler, resetHandler }) => {
  return (
    <FiltersContainer>
      <PaginationContainer>
        <PaginationInfo>16 of 32 products</PaginationInfo>
      </PaginationContainer>
      <Title>Sort by:</Title>
      {filters.map((filter) => (
        <Filter
          key={filter.id}
          selectHandler={selectHandler(filter.id)}
          data={filter.options}
          name={filter.name}
          value={filter.value}
        />
      ))}
      <ResetButton onClick={resetHandler}>Reset filters</ResetButton>
    </FiltersContainer>
  );
};

export default Filters;
