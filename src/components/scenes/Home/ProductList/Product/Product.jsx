//dependencies
import React, { useState, useContext } from "react";
//context
import { UserContext } from "../../../../../context/userProvider";
//assets
import { redeemProduct } from "../../../../../services/apiData";
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
} from "./Product.elements";
import {
  ProductImg,
  ContainerInfo,
  SecondaryTitle,
  Info,
  ActionButton,
} from "../../../../styles/globalStyles";
//styled icons
import { Coins } from "@styled-icons/fa-solid/Coins";

//it renders each product available
const Product = (props) => {
  const { id, category, cost, photo, name, updating, setUpdating } = props;
  //extracting points data from Provider UserContext
  const { userPoints, setUserPoints } = useContext(UserContext);
  const points = userPoints.data;
  //state that handles modal opening
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  /* --------------------------------- */
  //Redeeming products with user points
  const redeem = async (productId, cost) => {
    try {
      //data: async call, it returns promise
      await redeemProduct(productId);
      //updating points
      setUserPoints({ ...userPoints, data: points - cost });
      //updating history
      setUpdating(!updating);
      //success notification
      setSuccessModal(true);
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
