//dependencias
import React from "react";
import ReactDOM from "react-dom";
//styled components
import { StyledModal, ModalContainer } from "./Modal.elements";

function Modal(props) {
  const { isOpen } = props;
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <StyledModal>
      <ModalContainer>{props.children}</ModalContainer>
    </StyledModal>,
    document.getElementById("modal")
  );
}

export default Modal;
