//dependencies
import React, { useContext } from "react";
//context
import { UserContext } from "../../context/userProvider";
//assets
import { redeemProduct } from "../../assets/apiData";
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

//it renders each product available
const Product = ({ id, category, cost, photo, name }) => {
  //extracting points data from Provider UserContext
  const { userPoints } = useContext(UserContext);
  const points = userPoints.data;
  //Redeeming products with user points
  const redeem = async (productId) => {
    try {
      //data: async call, it returns promise
      const redeemData = await redeemProduct(productId);
      //success notification
      alert(redeemData);
    } catch (error) {
      //error notification
      alert("error", error);
    }
  };
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
        {points >= cost && (
          <ProductButton
            onClick={() => {
              redeem(id);
            }}
          >
            Redeem now
          </ProductButton>
        )}
      </ProductRedeem>
    </ProductContainer>
  );
};

export default Product;
