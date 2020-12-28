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
//styled icons
import { Cross } from "@styled-icons/entypo/Cross";

function ErrorModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ErrorBackground>
        <Cross />
        <SecondaryTitle Modal>Error</SecondaryTitle>
        <Info Modal>Something went wrong.</Info>
        <ActionButton color="#c51717" onClick={onClose}>
          Try again
        </ActionButton>
      </ErrorBackground>
    </Modal>
  );
}

export default ErrorModal;
