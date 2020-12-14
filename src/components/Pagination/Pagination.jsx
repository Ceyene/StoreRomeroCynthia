//dependencies
import React from "react";
//components
import PaginationInfo from "../PaginationInfo/PaginationInfo";
//styled components
import { StyledPagination } from "./Pagination.elements";
import { Button, FlexContainer } from "../../globalStyles";
//styled icons
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

//it renders pagination section
const Pagination = ({ products }) => {
  return (
    <StyledPagination>
      <PaginationInfo prodList={products} />
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
