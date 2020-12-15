//dependencies
import React, { useState, useContext } from "react";
//context
import { UserContext } from "../../context/userProvider";
//assets
import { redeemProduct, callHistory } from "../../assets/apiData";
//components
import ProductIndicator from "../ProductIndicator/ProductIndicator";
import SuccessModal from "../SuccessModal/SuccessModal";
import ErrorModal from "../ErrorModal/ErrorModal";
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
  //state that handles modal opening
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  /* --------------------------------- */
  //Redeeming products with user points
  const redeem = async (productId) => {
    try {
      //data: async call, it returns promise
      await redeemProduct(productId);
      //success notification
      setSuccessModal(true);
      callHistory();
    } catch (error) {
      //error notification
      setErrorModal(true);
    }
  };
  /* --------------------------------- */
  //función para manejar cierre del modal
  const handleCloseSuccess = (e) => {
    setSuccessModal(false);
  };
  /* --------------------------------- */
  //función para manejar cierre del modal
  const handleCloseError = (e) => {
    setErrorModal(false);
  };
  /* --------------------------------- */

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
      <SuccessModal
        isOpen={successModal}
        onClose={() => {
          handleCloseSuccess();
        }}
      />
      <ErrorModal
        isOpen={errorModal}
        onClose={() => {
          handleCloseError();
        }}
      />
    </ProductContainer>
  );
};

export default Product;
