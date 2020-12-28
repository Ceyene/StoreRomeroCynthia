//dependencies
import React from "react";
//components
import Modal from "../Modal/Modal";
//styled components
import { ProductButton } from "../Product/Product.elements";
import { SecondaryTitle, Info } from "../../../../styles/globalStyles";

function ErrorModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SecondaryTitle>Error</SecondaryTitle>
      <Info Modal>Something went wrong.</Info>
      <ProductButton onClick={onClose}>Try again</ProductButton>
    </Modal>
  );
}

export default ErrorModal;
