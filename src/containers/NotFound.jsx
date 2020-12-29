//dependencies
import React from "react";
import { Link } from "react-router-dom";
//styled components
import {
  StyledLink,
  NotFoundContainer,
  NotFoundImg,
} from "./styles/containersStyles";
//image
import NotFoundImage from "../assets/images/NotFound.png";

//it renders a "not found" notification page
const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundImg src={NotFoundImage} alt="Not Found" />
      <StyledLink>
        <Link to="/StoreRomeroCynthia">Back to Homepage</Link>
      </StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;
