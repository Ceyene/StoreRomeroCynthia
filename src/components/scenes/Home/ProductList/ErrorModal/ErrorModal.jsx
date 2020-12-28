//dependencies
import React from "react";
//components
import Modal from "../Modal/Modal";
//styled components
import { ErrorBackground } from "./ErrorModal.elements";
import {
  SecondaryTitle,
  Info,
  ActionButton,
} from "../../../../styles/globalStyles";

function ErrorModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ErrorBackground>
        <SecondaryTitle>Error</SecondaryTitle>
        <Info Modal>Something went wrong.</Info>
        <ActionButton color="#D71212" onClick={onClose}>
          Try again
        </ActionButton>
      </ErrorBackground>
    </Modal>
  );
}

export default ErrorModal;
