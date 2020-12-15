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

//it renders each redeemed product
const HistoryProduct = ({ name, photo, cost }) => {
  return (
    <StyledHistoryProduct>
      <ProductImg Small src={photo} alt={name} />
      <ContainerInfo>
        <SecondaryTitle>{name}</SecondaryTitle>
        <Info>{cost} pts</Info>
      </ContainerInfo>
    </StyledHistoryProduct>
  );
};

export default HistoryProduct;
