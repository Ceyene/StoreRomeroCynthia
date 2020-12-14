//dependencies
import React, { useEffect } from "react";
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

const Filters = ({ filters, setFilters, getData, products, setProducts }) => {
  //when "filters" state updates,
  //this function compares and change array in "products" state
  useEffect(() => {
    productFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  /* --------------------------------- */
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
  //it filters products by price
  const productFilters = () => {
    if (filters[0].value !== "Prices" && products !== undefined) {
      if (filters[0].value === "Lowest Price") {
        const lowerPriceFirst = products.sort((a, b) => a.cost - b.cost);
        return setProducts({ data: lowerPriceFirst });
      } else if (filters[0].value === "Highest Price") {
        const higherPriceFirst = products.sort((a, b) => b.cost - a.cost);
        return setProducts({ data: higherPriceFirst });
      }
    }
    categoryFilters();
  };
  //it filters products by category
  const categoryFilters = () => {
    if (filters[1].value !== "Categories" && products !== undefined) {
      let productsCopy = products.filter((product) => {
        return product.category === filters[1].value;
      });
      return setProducts({ data: productsCopy });
    }
  };
  /* --------------------------------- */
  //it renders filters section
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
