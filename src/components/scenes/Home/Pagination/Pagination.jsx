//dependencies
import React, { useState, useContext } from "react";
//context
import { ProductContext } from "../../../../context/productProvider";
//components
import PaginationInfo from "../../../PaginationInfo/PaginationInfo";
//styled components
import { StyledPagination } from "./Pagination.elements";
import { Button, FlexContainer } from "../../../styles/globalStyles";
//styled icons
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

//it renders pagination section
const Pagination = ({ currentPage, next, prev }) => {
  //extracting data from Provider ProductContext
  const { products } = useContext(ProductContext);
  //info from products data
  const productsList = products.data;
  /* --------------------------------- */
  //state with current page information
  const [page, setPage] = useState(1);
  /* --------------------------------- */
  //go to next page
  const nextPage = () => {
    setPage(2);
    next(currentPage, 2);
  };
  //go to previous page
  const prevPage = () => {
    setPage(1);
    prev(currentPage);
  };
  /* --------------------------------- */
  return (
    <StyledPagination>
      <PaginationInfo currentPage={currentPage} />
      <FlexContainer>
        {page === 2 && (
          <Button
            onClick={() => {
              prevPage();
            }}
            color="#18689d"
            borderColor="#18689d"
            bgColor="transparent"
          >
            <ArrowLeftShort />
          </Button>
        )}
        {page === 1 && productsList !== undefined && productsList.length > 16 && (
          <Button
            onClick={() => {
              nextPage();
            }}
            color="#18689d"
            borderColor="#18689d"
            bgColor="transparent"
          >
            <ArrowRightShort />
          </Button>
        )}
      </FlexContainer>
    </StyledPagination>
  );
};

export default Pagination;
