//dependencies
import React from "react";
//logo image
import Logo from "../../assets/images/gift-voucher.png";
//styled components
import {
  StyledHeader,
  UserInfo,
  Points,
  GiftPoints,
  GiftButton,
  LogoImg,
  StyledIcon,
} from "./Header.elements";
import { MainInfo, Title } from "../../globalStyles";
//styled icons
import { Coins } from "@styled-icons/fa-solid/Coins";

const Header = () => {
  return (
    <StyledHeader>
      <LogoImg src={Logo} alt="Store Logo" />
      <UserInfo>
        <MainInfo>John Kite</MainInfo>
        <Points>
          <MainInfo>6000</MainInfo>
          <StyledIcon>
            <Coins color="gold" />
          </StyledIcon>
        </Points>
        <GiftPoints>
          <Title>Get Free Points!</Title>
          <Points Gift>
            <GiftButton> 1000 </GiftButton>
            <GiftButton> 5000 </GiftButton>
            <GiftButton> 7500 </GiftButton>
          </Points>
        </GiftPoints>
      </UserInfo>
    </StyledHeader>
  );
};

export default Header;
