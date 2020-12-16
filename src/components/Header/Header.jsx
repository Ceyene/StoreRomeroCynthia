//dependencies
import React, { useContext } from "react";
//assets
import { sendPoints } from "../../assets/apiData";
//context
import { UserContext } from "../../context/userProvider";
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
  const { userPoints, setUserPoints, userName } = useContext(UserContext);

  //update points when adding gift points
  const addPoints = async (giftPoints) => {
    try {
      console.log(userPoints);
      //initial state: loading and without errors
      setUserPoints({ ...userPoints, loading: true, error: null });
      //data: async call, it returns promise
      const getPoints = await sendPoints(giftPoints);
      const newPoints = getPoints["New Points"];
      //presenting data
      return setUserPoints({ ...userPoints, loading: false, data: newPoints });
    } catch (error) {
      //presenting error
      return setUserPoints({ ...userPoints, loading: false, error });
    }
  };
  /* --------------------------------- */
  //it renders header function
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
            <GiftButton
              onClick={() => {
                addPoints(1000);
              }}
            >
              {" "}
              1000{" "}
            </GiftButton>
            <GiftButton
              onClick={() => {
                sendPoints(5000);
              }}
            >
              {" "}
              5000{" "}
            </GiftButton>
            <GiftButton
              onClick={() => {
                sendPoints(7500);
              }}
            >
              {" "}
              7500{" "}
            </GiftButton>
          </Points>
        </GiftPoints>
      </UserInfo>
    </StyledHeader>
  );
};

export default Header;
