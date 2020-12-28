//dependencies
import React, { useContext } from "react";
//context
import { ProductContext } from "../../context/productProvider";
//styled components
import { PaginationText } from "../styles/globalStyles";

//it renders pagination information
const PaginationInfo = ({ currentPage }) => {
  //extracting data from Provider ProductContext
  const { products } = useContext(ProductContext);
  //info from products data
  const prodList = products.data;
  /* --------------------------------- */
  if (prodList === undefined) {
    return <PaginationText>Loading...</PaginationText>;
  }
  if (currentPage === 2) {
    return <PaginationText>Products 16 to {prodList.length}</PaginationText>;
  }
  if (prodList.length < 16) {
    return <PaginationText>Products 1 to {prodList.length}</PaginationText>;
  }
  return <PaginationText>Products 1 to 16</PaginationText>;
};

export default PaginationInfo;
