//dependencies
import React from "react";
//styled components
import { ActionButton } from "../../../../styles/globalStyles";
import { ProductRedeem, Value, ProductValue } from "./ProductHover.elements";
//styled icons
import { Coins } from "@styled-icons/fa-solid/Coins";

const ProductHover = ({ cost, points, id, redeem }) => {
  return (
    <ProductRedeem>
      <Value>
        <ProductValue>{cost}</ProductValue>
        <Coins color="gold" />
      </Value>
      {points >= cost && (
        <ActionButton
          color="#18689d"
          onClick={() => {
            redeem(id, cost);
          }}
        >
          Redeem now
        </ActionButton>
      )}
    </ProductRedeem>
  );
};

export default ProductHover;
