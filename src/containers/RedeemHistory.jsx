//dependencies
import React from "react";
//context provider
import UserProvider from "../context/userProvider";
//components
import { Header, HistoryContainer } from "../components";
//styles
import GlobalStyle from "../components/styles/globalStyles";

//it renders a new page with user's products redeem history
const RedeemHistory = () => {
  return (
    <UserProvider>
      <GlobalStyle />
      <Header display="none" />
      <HistoryContainer />
    </UserProvider>
  );
};

export default RedeemHistory;
