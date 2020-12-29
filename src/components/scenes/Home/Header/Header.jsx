//dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import { UserContext } from "../../../../context/userProvider";
//logo image
import Logo from "../../../../assets/images/gift-voucher.png";
//components
import MainInformation from "./MainInformation/MainInformation";
//styled components
import {
  StyledHeader,
  UserInfo,
  Points,
  LogoImg,
  StyledIcon,
  HistoryButton,
} from "./Header.elements";
//styled icons
import { Coins } from "@styled-icons/fa-solid/Coins";
import { Gift } from "@styled-icons/icomoon/Gift";

const Header = ({ display }) => {
  //extracting data from Provider UserContext
  const { userPoints, userName } = useContext(UserContext);
  /* --------------------------------- */
  //it renders header function
  return (
    <StyledHeader>
      <Link to="/">
        <LogoImg src={Logo} alt="Store Logo" />
      </Link>
      <UserInfo>
        <MainInformation userInfo={userName} />
        <Points>
          <MainInformation userInfo={userPoints} />
          <StyledIcon>
            <Coins color="gold" />
          </StyledIcon>
        </Points>
        <HistoryButton display={display}>
          <Link to="/History">
            My <Gift />
          </Link>
        </HistoryButton>
      </UserInfo>
    </StyledHeader>
  );
};

export default Header;
