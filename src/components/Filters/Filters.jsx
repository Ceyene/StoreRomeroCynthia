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

const Filters = (props) => {
  const {
    priceFilter,
    setPriceFilter,
    categoryFilter,
    setCategoryFilter,
    getData,
    products,
    setProducts,
    currentPage,
  } = props;
  const { idPr, namePr, valuePr, optionsPr } = priceFilter;
  const { idCat, nameCat, valueCat, optionsCat } = categoryFilter;
  //when "prices" filter updates,
  //this function compares and change array in "products" state
  useEffect(() => {
    filterPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceFilter]);
  /* --------------------------------- */
  //when "category" filter updates,
  //this function compares and change array in "products" state
  useEffect(() => {
    filterCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter]);
  /* --------------------------------- */
  //handles state from price filter
  const handlePrice = (e) => {
    let copyPrice = valuePr;
    copyPrice = e.target.value;
    setPriceFilter({ ...priceFilter, valuePr: copyPrice });
  };
  //handles state from category filter
  const handleCategory = (e) => {
    let copyCategory = valueCat;
    copyCategory = e.target.value;
    setCategoryFilter({ ...categoryFilter, valueCat: copyCategory });
    console.log(categoryFilter);
  };
  //it resets state from filters
  //price and category reset
  const handleReset = () => {
    setPriceFilter({ ...priceFilter, valuePr: "Prices" });
    setCategoryFilter({ ...categoryFilter, valueCat: "Categories" });
    //renderize all, without filters
    getData();
  };
  /* --------------------------------- */
  //it filters products by price
  const filterPrice = () => {
    if (products !== undefined) {
      if (valuePr === "Lowest Price") {
        return cheapFirst();
      } else if (valuePr === "Highest Price") {
        return expensiveFirst();
      }
    }
  };
  const cheapFirst = () => {
    const lowerPriceFirst = products.sort((a, b) => a.cost - b.cost);
    return setProducts({ data: lowerPriceFirst });
  };
  const expensiveFirst = () => {
    const higherPriceFirst = products.sort((a, b) => b.cost - a.cost);
    return setProducts({ data: higherPriceFirst });
  };
  /* --------------------------------- */
  //it filters products by category
  const filterCategory = () => {
    if (categoryFilter.value !== "Categories" && products !== undefined) {
      let productsCopy = products.filter((product) => {
        return product.category === valueCat;
      });
      return setProducts({ data: productsCopy });
    }
  };
  /* --------------------------------- */
  //it renders filters section
  return (
    <FiltersContainer>
      <PaginationContainer>
        <PaginationInfo prodList={products} currentPage={currentPage} />
      </PaginationContainer>
      <Title>Sort by:</Title>
      <Filter
        key={idPr}
        handleFilters={(e) => {
          handlePrice(e);
        }}
        data={optionsPr}
        name={namePr}
        value={valuePr}
      />
      <Filter
        key={idCat}
        handleFilters={(e) => {
          handleCategory(e);
        }}
        data={optionsCat}
        name={nameCat}
        value={valueCat}
      />
      <ResetButton onClick={handleReset}>Reset filters</ResetButton>
    </FiltersContainer>
  );
};

export default Filters;
