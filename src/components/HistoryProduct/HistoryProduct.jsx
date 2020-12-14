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

const HistoryProduct = ({ name, photo, cost }) => {
  return (
    <StyledHistoryProduct>
      <ProductImg src={photo} alt={name} />
      <ContainerInfo>
        <SecondaryTitle>{name}</SecondaryTitle>
        <Info>{cost} pts</Info>
      </ContainerInfo>
    </StyledHistoryProduct>
  );
};

export default HistoryProduct;
