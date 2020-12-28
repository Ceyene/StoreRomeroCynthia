//dependencies
import React from "react";
//components
import Modal from "../Modal/Modal";
//styled components
import { SuccessBackground } from "./SuccessModal.elements";
import {
  SecondaryTitle,
  Info,
  ActionButton,
} from "../../../../styles/globalStyles";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SuccessBackground>
        <SecondaryTitle Modal>Product redeemed!</SecondaryTitle>
        <Info Modal>You can see it in your history.</Info>
        <ActionButton color="#1E7B4E" onClick={onClose}>
          Continue
        </ActionButton>
      </SuccessBackground>
    </Modal>
  );
};

export default SuccessModal;
