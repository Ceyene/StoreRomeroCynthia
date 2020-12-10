//dependencies
import React from "react";
//styled components
import { StyledPagination, Buttons } from "./Pagination.elements";
import { PaginationInfo, Button } from "../../globalStyles";
//styled icons
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

const Pagination = () => {
  return (
    <StyledPagination>
      <PaginationInfo>16 of 32 products</PaginationInfo>
      <Buttons>
        <Button color="#18689d" borderColor="#18689d" bgColor="transparent">
          <ArrowLeftShort />
        </Button>
        <Button color="#18689d" borderColor="#18689d" bgColor="transparent">
          <ArrowRightShort />
        </Button>
      </Buttons>
    </StyledPagination>
  );
};

export default Pagination;
