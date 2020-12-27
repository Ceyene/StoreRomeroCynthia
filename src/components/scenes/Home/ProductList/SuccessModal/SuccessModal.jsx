//dependencies
import React from "react";
//components
import Modal from "../Modal/Modal";
//styled components
import { ProductButton } from "../Product/Product.elements";
import { SecondaryTitle, Info } from "../../globalStyles";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SecondaryTitle Modal>Product redeemed!</SecondaryTitle>
      <Info Modal>You can see it in your history.</Info>
      <ProductButton onClick={onClose}>Continue</ProductButton>
    </Modal>
  );
};

export default SuccessModal;
