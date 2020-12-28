//dependencies
import React from "react";
//styled components
import { StyledProdIndicator, StyledInd } from "./ProductIndicator.elements";
//styled icons
import { BagFill } from "@styled-icons/bootstrap/BagFill";
import { Coins } from "@styled-icons/fa-solid/Coins";

//it renders indicator of products redeem availability
const ProductIndicator = ({ cost, points, setHover }) => {
  if (points === undefined) {
    return <StyledProdIndicator Message>Loading...</StyledProdIndicator>;
  }
  //notification: when user doesn't have enough points
  if (points < cost) {
    return (
      <StyledProdIndicator Message>
        You need {cost - points} <Coins color="gold" />
      </StyledProdIndicator>
    );
  }
  //it renders when user has enough points for this product
  return (
    <StyledProdIndicator>
      <StyledInd onClick={setHover}>Click here to</StyledInd> <BagFill />
    </StyledProdIndicator>
  );
};

export default ProductIndicator;
