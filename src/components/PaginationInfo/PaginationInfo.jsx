//dependencies
import React from "react";
//styled components
import { PaginationText } from "../../globalStyles";

//it renders pagination information
const PaginationInfo = ({ prodList }) => {
  if (prodList === undefined) {
    return <PaginationText>Loading...</PaginationText>;
  }
  return <PaginationText>16 of {prodList.length} products</PaginationText>;
};

export default PaginationInfo;
