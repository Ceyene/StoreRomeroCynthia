//dependencies
import React, { useContext } from "react";
//context
import { UserContext } from "../../assets/userData";
//logo image
import Logo from "../../assets/images/gift-voucher.png";
//components
import MainInformation from "../MainInformation/MainInformation";
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
import { Title } from "../../globalStyles";
//styled icons
import { Coins } from "@styled-icons/fa-solid/Coins";

const Header = () => {
  //extracting data from Provider UserContext
  const { userPoints, userName } = useContext(UserContext);
  return (
    <StyledHeader>
      <LogoImg src={Logo} alt="Store Logo" />
      <UserInfo>
        <MainInformation userInfo={userName} />
        <Points>
          <MainInformation userInfo={userPoints} />
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
