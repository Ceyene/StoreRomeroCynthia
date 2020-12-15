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
    return <PaginationText>Products 16 to {prodList.length}</PaginationText>;
  }
  return <PaginationText>Products 1 to 16</PaginationText>;
};

export default PaginationInfo;
