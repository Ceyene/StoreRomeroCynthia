//dependencies
import React from "react";
//components
import Filter from "../Filter/Filter";
import PaginationInfo from "../PaginationInfo/PaginationInfo";
//styled components
import {
  FiltersContainer,
  PaginationContainer,
  ResetButton,
} from "./Filters.elements";
import { Title } from "../../globalStyles";

const Filters = ({ filters, setFilters, getData, products }) => {
  //handles state from filters
  const handleFilters = (i) => {
    return (e) => {
      const copyFilters = [...filters];
      copyFilters[i].value = e.target.value;
      setFilters(copyFilters);
    };
  };
  //it resets state from filters
  //country, price and size reset
  const handleReset = () => {
    const filtersCopy = [...filters];
    filtersCopy[0].value = "Prices";
    filtersCopy[1].value = "Categories";
    setFilters(filtersCopy);
    //renderize all, without filters
    getData();
  };
  /* --------------------------------- */

  return (
    <FiltersContainer>
      <PaginationContainer>
        <PaginationInfo prodList={products} />
      </PaginationContainer>
      <Title>Sort by:</Title>
      {filters.map((filter) => (
        <Filter
          key={filter.id}
          handleFilters={handleFilters(filter.id)}
          data={filter.options}
          name={filter.name}
          value={filter.value}
        />
      ))}
      <ResetButton onClick={handleReset}>Reset filters</ResetButton>
    </FiltersContainer>
  );
};

export default Filters;
