//dependencies
import React from "react";
//styled components
import { StyledPagination } from "./Pagination.elements";
import { PaginationInfo, Button, FlexContainer } from "../../globalStyles";
//styled icons
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

const Pagination = ({ products }) => {
  return (
    <StyledPagination>
      <PaginationInfo>16 of {products.length} products</PaginationInfo>
      <FlexContainer>
        <Button color="#18689d" borderColor="#18689d" bgColor="transparent">
          <ArrowLeftShort />
        </Button>
        <Button color="#18689d" borderColor="#18689d" bgColor="transparent">
          <ArrowRightShort />
        </Button>
      </FlexContainer>
    </StyledPagination>
  );
};

export default Pagination;
