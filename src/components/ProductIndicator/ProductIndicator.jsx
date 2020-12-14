//dependencies
import React, { useContext } from "react";
//context
import { UserContext } from "../../assets/userData";
//styled components
import { StyledProdIndicator } from "./ProductIndicator.elements";
//styled icons
import { BagFill } from "@styled-icons/bootstrap/BagFill";
import { Coins } from "@styled-icons/fa-solid/Coins";

const ProductIndicator = ({ cost }) => {
  //extracting data from Provider UserContext
  const { userPoints } = useContext(UserContext);
  const points = userPoints.data;

  if (points !== undefined) {
    if (points < cost) {
      return (
        <StyledProdIndicator Message>
          You need {cost - points} <Coins color="gold" />
        </StyledProdIndicator>
      );
    }
    return (
      <StyledProdIndicator>
        <BagFill />
      </StyledProdIndicator>
    );
  }
};

export default ProductIndicator;
