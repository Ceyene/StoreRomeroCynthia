//dependencies
import React from "react";
//styled components
import {
  ProductContainer,
  ProductIndicator,
  StyledProduct,
  ProductImg,
  ProductInfo,
  ProductCategory,
  ProductTitle,
  ProductRedeem,
  Value,
  ProductValue,
  ProductButton,
} from "./Product.elements";
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
        <ProductInfo>
          <ProductCategory>Category</ProductCategory>
          <ProductTitle>Product Name</ProductTitle>
        </ProductInfo>
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
