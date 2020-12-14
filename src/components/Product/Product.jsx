//dependencies
import React, { useContext } from "react";
//context
import { UserContext } from "../../context/userProvider";
//components
import ProductIndicator from "../ProductIndicator/ProductIndicator";
//styled components
import {
  ProductContainer,
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
import { Coins } from "@styled-icons/fa-solid/Coins";

const Product = ({ category, cost, photo, name }) => {
  //extracting data from Provider UserContext
  const { userPoints } = useContext(UserContext);
  const points = userPoints.data;

  return (
    <ProductContainer>
      <ProductIndicator cost={cost} points={points} />
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
        {points >= cost && <ProductButton>Redeem now</ProductButton>}
      </ProductRedeem>
    </ProductContainer>
  );
};

export default Product;
