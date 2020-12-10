//dependencies
import React from "react";
//styled components
import { StyledHero } from "./Hero.elements";
import { MainTitle } from "../../globalStyles";

const Hero = ({ sectionName }) => {
  return (
    <StyledHero>
      <MainTitle>{sectionName}</MainTitle>
    </StyledHero>
  );
};

export default Hero;
