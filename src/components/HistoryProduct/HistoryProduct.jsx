//dependencies
import React from "react";
//styled components
import { StyledHistoryProduct } from "./HistoryProduct.elements";
import {
  ContainerInfo,
  SecondaryTitle,
  Info,
  ProductImg,
} from "../../globalStyles";

const HistoryProduct = () => {
  return (
    <StyledHistoryProduct>
      <ProductImg
        src="https://dummyimage.com/600x400/000/fff.jpg"
        alt="Product"
      />
      <ContainerInfo>
        <SecondaryTitle>Product Name</SecondaryTitle>
        <Info>12000 pts</Info>
      </ContainerInfo>
    </StyledHistoryProduct>
  );
};

export default HistoryProduct;
