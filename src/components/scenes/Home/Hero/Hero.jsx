//dependencies
import React from "react";
//styled components
import { StyledHero } from "./Hero.elements";
import { MainTitle } from "../../../styles/globalStyles";

//it renders section name
const Hero = ({ sectionName }) => {
  return (
    <StyledHero>
      <MainTitle>{sectionName}</MainTitle>
    </StyledHero>
  );
};

export default Hero;
