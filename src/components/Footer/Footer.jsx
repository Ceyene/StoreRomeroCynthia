//dependencies
import React from "react";
//styled components
import { StyledFooter, FooterText, FooterLink } from "./Footer.elements";
//styled icons
import { SuitHeartFill } from "@styled-icons/bootstrap/SuitHeartFill";

//it renders footer section
const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        2020 - Developed with <SuitHeartFill /> by Cynthia Romero.
      </FooterText>
      <FooterText>
        Logo made by{" "}
        <FooterLink
          href="https://www.flaticon.com/authors/srip"
          title="srip"
          target="_blank"
        >
          srip
        </FooterLink>{" "}
        from{" "}
        <FooterLink
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
        >
          www.flaticon.com
        </FooterLink>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
