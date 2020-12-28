//dependencies
import React, { useContext } from "react";
//api
import { callProducts } from "../../../../services/apiProduct";
//context
import { ProductContext } from "../../../../context/productProvider";
//components
import Filter from "./Filter/Filter";
import PaginationInfo from "../../../PaginationInfo/PaginationInfo";
//styled components
import { FiltersContainer, PaginationContainer } from "./Filters.elements";
import { Title } from "../../../styles/globalStyles";

const Filters = ({ currentPage }) => {
  //extracting data from Provider ProductContext
  const { products, setProducts } = useContext(ProductContext);
  //info from products data
  const productsData = products.data;
  /* --------------------------------- */
  //it changes the order in products array
  const recentFirst = async () => {
    try {
      //data: async call, it returns promise
      const recentDateFirst = await callProducts();
      return setProducts({ ...products, data: recentDateFirst });
    } catch (error) {
      //presents error
      setProducts({ ...products, error });
    }
  };
  const cheapFirst = () => {
    const lowerPriceFirst = productsData.sort((a, b) => a.cost - b.cost);
    return setProducts({ ...products, data: lowerPriceFirst });
  };
  const expensiveFirst = () => {
    const higherPriceFirst = productsData.sort((a, b) => b.cost - a.cost);
    return setProducts({ ...products, data: higherPriceFirst });
  };
  /* --------------------------------- */
  //it renders filters section
  return (
    <FiltersContainer>
      <PaginationContainer>
        <PaginationInfo currentPage={currentPage} />
      </PaginationContainer>
      <Title>Sort by:</Title>
      <Filter handleFilter={recentFirst} name="Most recent" />
      <Filter handleFilter={cheapFirst} name="Lowest price" />
      <Filter handleFilter={expensiveFirst} name="Highest price" />
    </FiltersContainer>
  );
};

export default Filters;
