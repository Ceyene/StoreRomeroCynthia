//dependencies
import React from "react";
//styled components
import {
  ProductContainer,
  ProductIndicator,
  StyledProduct,
  ProductRedeem,
  Value,
  ProductValue,
  ProductButton,
} from "./Product.elements";
import {
  ProductImg,
  ContainerInfo,
  SecondaryTitle,
  Info,
} from "../../globalStyles";
//styled icons
import { BagFill } from "@styled-icons/bootstrap/BagFill";
import { Coins } from "@styled-icons/fa-solid/Coins";

const Product = ({ category, cost, photo, name }) => {
  return (
    <ProductContainer>
      <ProductIndicator>
        <BagFill />
      </ProductIndicator>
      <StyledProduct>
        <ProductImg src={photo} alt={name} />
        <ContainerInfo>
          <Info>{category}</Info>
          <SecondaryTitle>{name}</SecondaryTitle>
        </ContainerInfo>
      </StyledProduct>
      <ProductRedeem>
        <Value>
          <ProductValue>{cost}</ProductValue>
          <Coins color="gold" />
        </Value>
        <ProductButton>Redeem now</ProductButton>
      </ProductRedeem>
    </ProductContainer>
  );
};

export default Product;
