//dependencies
import React from "react";
//styled components
import { MainInfo } from "../../../../styles/globalStyles";

const MainInformation = ({ userInfo }) => {
  const { loading, error, data } = userInfo;
  if (loading === true) {
    return (
      //It renders loading message
      <MainInfo Message>Loading...</MainInfo>
    );
  }

  if (error) {
    return (
      //It renders notification of error
      <MainInfo Message>{error}</MainInfo>
    );
  }
  //it renders user information
  return <MainInfo>{data}</MainInfo>;
};

export default MainInformation;
