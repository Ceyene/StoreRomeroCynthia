//dependencies
import React, { useState, useContext } from "react";
//context
import { UserContext } from "../../../../../context/userProvider";
//assets
import { redeemProduct } from "../../../../../services/apiProduct";
//components
import ProductIndicator from "../ProductIndicator/ProductIndicator";
import ProductHover from "../ProductHover/ProductHover";
import SuccessModal from "../SuccessModal/SuccessModal";
import ErrorModal from "../ErrorModal/ErrorModal";
//styled components
import { ProductContainer, StyledProduct } from "./Product.elements";
import {
  ProductImg,
  ContainerInfo,
  SecondaryTitle,
  Info,
} from "../../../../styles/globalStyles";

//it renders each product available
const Product = (props) => {
  const { id, category, cost, photo, name, updating, setUpdating } = props;
  //extracting points data from Provider UserContext
  const { userPoints, setUserPoints } = useContext(UserContext);
  const points = userPoints.data;
  //state that handles product hover
  const [hover, setHover] = useState(false);
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
    <ProductContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ProductIndicator
        cost={cost}
        points={points}
        setHover={() => setHover(!hover)}
      />
      <StyledProduct>
        <ProductImg src={photo} alt={name} />
        <ContainerInfo>
          <Info>{category}</Info>
          <SecondaryTitle>{name}</SecondaryTitle>
        </ContainerInfo>
      </StyledProduct>
      {hover && (
        <ProductHover cost={cost} points={points} id={id} redeem={redeem} />
      )}
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
