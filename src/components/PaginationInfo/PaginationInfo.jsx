//dependencies
import React from "react";
//styled components
import { PaginationText } from "../../globalStyles";

//it renders pagination information
const PaginationInfo = ({ currentPage, prodList }) => {
  if (prodList === undefined) {
    return <PaginationText>Loading...</PaginationText>;
  }
  if (currentPage === 2) {
    return <PaginationText>products 16 to {prodList.length}</PaginationText>;
  }
  return <PaginationText>products 1 to 16</PaginationText>;
};

export default PaginationInfo;
