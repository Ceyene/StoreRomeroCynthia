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

const Product = () => {
  return (
    <ProductContainer>
      <ProductIndicator>
        <BagFill />
      </ProductIndicator>
      <StyledProduct>
        <ProductImg
          src="https://dummyimage.com/600x400/000/fff.jpg"
          alt="Product"
        />
        <ContainerInfo>
          <Info>Category</Info>
          <SecondaryTitle>Product Name</SecondaryTitle>
        </ContainerInfo>
      </StyledProduct>
      <ProductRedeem>
        <Value>
          <ProductValue>12000</ProductValue>
          <Coins color="gold" />
        </Value>
        <ProductButton>Redeem now</ProductButton>
      </ProductRedeem>
    </ProductContainer>
  );
};

export default Product;
